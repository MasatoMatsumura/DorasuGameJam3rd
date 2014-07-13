#pragma strict

private var gameManager:GameManager;

//■GUIで設定するための変数
public var Score:int = 0;

function Start( )
{
	gameManager = GameObject.Find( "GameManager" ).GetComponent.<GameManager>( );
	this.Activate( );
}

function Activate( )
{
	this.gameObject.GetComponent.<SpriteRenderer>( ).sprite = GameObject.Find( "CrabSprite" ).GetComponent.<SpriteRenderer>( ).sprite;
	this.gameObject.GetComponent.<PolygonCollider2D>( ).isTrigger = true;
	
	this.gameObject.transform.localPosition.y = 5;
}

function OnTriggerEnter2D( collidedObject:Collider2D )
{
	//■衝突したオブジェクトがプレイヤーかどうかチェック
	if( collidedObject.gameObject.tag == "Player" )
	{	
		//■スコアの加算
		gameManager.Add_Score( this.Score );
		
		this.gameObject.transform.localPosition.y = 5;
		
		//■アクティブをオフにする
		this.gameObject.SetActive( false );
	}
}