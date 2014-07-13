using UnityEngine;
using System.Collections;

public class Time_script : MonoBehaviour
{
	// 制限時間;
	public int m_timeLimit_sec = 30;
	private int m_timeLimit_frame;
	// 経過時間;
	public float m_timer = 0;
	// 残り時間;
	private float m_time_left;

	// Use this for initialization
	void Start () 
	{
		// 制限時間のフレームに変換;
		m_timeLimit_frame = m_timeLimit_sec * 60;
		// 制限時間を設定
		m_time_left = m_timeLimit_frame;
	}
	
	// Update is called once per frame
	void Update () 
	{
		// 経過時間を更新;
		m_timer += Time.deltaTime;

		// 残り時間を算出
		m_time_left = m_timeLimit_frame - m_timer;
	}

	// 残り時間を返す
	float Get_time_left()
	{
		return m_time_left;
	}

	// 残り時間が0になったかどうかを返す
	bool Time_out()
	{
		// 残り時間が0になったらtureを返す;
		if (m_time_left <= 0) 
		{
			return true;
		}

		return false;
	}
}
