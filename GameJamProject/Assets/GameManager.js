#pragma strict

private var timeLeft:float;
private var Score:int;

function Start ( ) {
	this.timeLeft = 0;
	this.Score = 0;
	
	
}

function Update ( ) {
	this.timeLeft -= 1 / 60;
}

function Get_Frame( )
{
	return 60 - this.timeLeft;
}

function Add_Score( addScore:int )
{
	this.Score += addScore;
}