#pragma strict
//■メンバ変数
private var gameManager:GameManager;

//■GUIで値を設定するための変数
//▼オブジェクトの出現間隔（フレーム数）
public var frameSpanAppearance:int = 5;
//▼障害物が出現する確率
//　※10なら10分の1の確率で出現する
public var probabilityObstacle:int = 10;

function Start( )
{
	//■ゲームマネージャの取得
	gameManager = GameObject.Find( "GameManager" ).GetComponent.<GameManager>( );
}

function Update( )
{
	//■出現間隔チェック
	if( gameManager.Get_Frame( ) % 5 == 0 )
	{
		//■出現するオブジェクトが障害物かどうかを決定する
		//▼障害物
		if( Random.RandomRange( 0, probabilityObstacle + 1 ) == 1 )
		{
			
		}
		//▼障害物以外
		else
		{
		
		}
	}
}