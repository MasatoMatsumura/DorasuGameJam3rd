using UnityEngine;
using System.Collections;

public class Score_Script : MonoBehaviour 
{
	// スコア表示用GUIText;
	public GUIText m_scoreGUIText;

	// スコア;
	public int m_score;

	// Use this for initialization
	void Start () 
	{
		// 初期化処理の呼び出し;
		Initialize ();
	}
	
	// Update is called once per frame
	void Update () 
	{
		// スコアの表示;
		m_scoreGUIText.text = m_score.ToString ();
	}

	// 初期化;
	void Initialize ()
	{
		// スコアの初期化;
		m_score = 0;
	}

	// スコアの加算
	public void Add_score(int score)
	{
		m_score += score;
	}
}
