#pragma strict
//■メンバ変数
private var gameManager:GameManager;

//■GUIで設定するための変数
public var Score:int = 0;

private var hit:int = 0;

function Start( )
{
	//■ゲームマネージャの取得
	gameManager = GameObject.Find( "GameManager" ).GetComponent.<GameManager>( );

	this.gameObject.transform.localPosition.y = Random.RandomRange( 6, 12 + 1 );
	
	var rand:int = Random.RandomRange( 0, 5 + 1 );
	
	if( rand == 0 )
	{
	this.gameObject.GetComponent.<SpriteRenderer>( ).sprite = GameObject.Find( "RockSprite" ).GetComponent.<SpriteRenderer>( ).sprite;
	}
	else if( rand == 1 )
	{
		this.gameObject.GetComponent.<SpriteRenderer>( ).sprite = GameObject.Find( "CrabSprite" ).GetComponent.<SpriteRenderer>( ).sprite;
	}
	else
	{
		this.gameObject.GetComponent.<SpriteRenderer>( ).sprite = GameObject.Find( "SalmonSprite" ).GetComponent.<SpriteRenderer>( ).sprite;
		this.Score = 1;
	}
	
	if( hit > 0 )
	{
		Debug.Log( this.gameObject.GetComponent.<PolygonCollider2D>( ) );
	}
}

function Update( )
{
	if( this.gameObject.transform.localPosition.y < -7 )
	{
		this.gameObject.transform.localPosition.y = Random.RandomRange( 6, 12 + 1 );
		
		var rand:int = Random.RandomRange( 0, 5 + 1 );
		if( rand == 0 ){ this.gameObject.GetComponent.<SpriteRenderer>( ).sprite = GameObject.Find( "RockSprite" ).GetComponent.<SpriteRenderer>( ).sprite; }
		else if( rand == 1 ){ this.gameObject.GetComponent.<SpriteRenderer>( ).sprite = GameObject.Find( "CrabSprite" ).GetComponent.<SpriteRenderer>( ).sprite; }
		else{
			this.gameObject.GetComponent.<SpriteRenderer>( ).sprite = GameObject.Find( "SalmonSprite" ).GetComponent.<SpriteRenderer>( ).sprite;
			this.Score = 1;
		}
		
		this.gameObject.SetActive( false );
		this.gameObject.SetActive( true );
	}
	
	Debug.Log( this.gameObject.GetComponent.<PolygonCollider2D>( ) );
}

function OnTriggerEnter2D( collidedObject:Collider2D )
{
	//■衝突したオブジェクトがプレイヤーかどうかチェック
	if( collidedObject.gameObject.tag == "Player" )
	{
		//■スコアの加算
		gameManager.Add_Score( this.Score );
		
		this.gameObject.transform.localPosition.y = Random.RandomRange( 6, 12 + 1 );
		
		var rand:int = Random.RandomRange( 0, 5 + 1 );
		if( rand == 0 ){ this.gameObject.GetComponent.<SpriteRenderer>( ).sprite = GameObject.Find( "RockSprite" ).GetComponent.<SpriteRenderer>( ).sprite; }
		else if( rand == 1 ){ this.gameObject.GetComponent.<SpriteRenderer>( ).sprite = GameObject.Find( "CrabSprite" ).GetComponent.<SpriteRenderer>( ).sprite; }
		else{
			this.gameObject.GetComponent.<SpriteRenderer>( ).sprite = GameObject.Find( "SalmonSprite" ).GetComponent.<SpriteRenderer>( ).sprite;
			this.Score = 1;
		}
		
		this.gameObject.SetActive( false );
		this.gameObject.SetActive( true );
	}

}