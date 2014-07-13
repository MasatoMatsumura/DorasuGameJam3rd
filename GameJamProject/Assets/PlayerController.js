#pragma strict

//■GUI上で値を設定するための変数
//▼移動速度
public var moveSpeed:float = 0.1f;

function Update ( ) {
	//■変数
	//▼上下の移動を取得する
	var moveDistance:float = Input.GetAxisRaw( "Vertical" ) * Time.deltaTime;
	//▼左右の移動を取得する
	var currentSide:float = Input.GetAxisRaw( "Horizontal" ) * Time.deltaTime;
	
	//■入力処理
	//▼左に移動して画像を反転する
	if( currentSide > 0 )
	{
		//this.gameObject.transform.localPosition.x = -2.0f;
		this.gameObject.transform.localPosition.x += moveSpeed * currentSide;
		this.gameObject.transform.localRotation.y = 180.0f;
	}
	//▼右に移動して画像の反転を取り消す
	if( currentSide < 0 )
	{
		//this.gameObject.transform.localPosition.x = 2.0f;
		this.gameObject.transform.localPosition.x += moveSpeed * currentSide;
		this.gameObject.transform.localRotation.y = 0.0f;
	}
	//▼上に移動する
	if( moveDistance > 0 )
	{
		this.gameObject.transform.localPosition.y += moveSpeed * moveDistance;
	}
	//▼下に移動する
	if( moveDistance < 0 )
	{
		this.gameObject.transform.localPosition.y += moveSpeed * moveDistance;
	}
}

//■コライダーが衝突を検出した際に実行する
function OnTriggerEnter2D( collidedObject:Collider2D )
{
	Destroy( collidedObject );
}