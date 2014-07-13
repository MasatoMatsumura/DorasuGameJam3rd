using UnityEngine;
using System.Collections;

public class GameManager : MonoBehaviour 
{
	// 経過時間（フレーム）
	private int m_countFrame;
	// スコア
	private int m_score;

	public GUIText m_scoreGUIText;

	// Use this for initialization
	void Start () 
	{
		// 時間
		m_countFrame = 0;
		// スコア
		m_score = 0;
	}
	
	// Update is called once per frame
	void Update () 
	{
		// 経過時間を更新
		m_countFrame++;
		m_scoreGUIText.text = m_score.ToString ();
	}

	// スコア加算
	void Add_Score(int score)
	{
		m_score += score;
	}
	//* アクセッサ ******************************************
	// スコアの値を取得
	int Get_score()
	{
		return m_score;
	}

	// 時間を取得
	int Get_countFrame()
	{
		return m_countFrame;
	}

}
