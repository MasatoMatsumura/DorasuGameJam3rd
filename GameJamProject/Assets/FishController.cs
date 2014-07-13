using UnityEngine;
using System.Collections;

public class FishController : MonoBehaviour {

	// Use this for initialization
	void Start ( ) {
		
	}
	
	// Update is called once per frame
	void Update () {
		if (rigidbody2D.velocity.y == 0) {
			rigidbody2D.velocity = new Vector3( 0.0f, 1.0f, 0.0f );
		}
		if (transform.position.y <= -7) {
			transform.position = new Vector3( 0.0f, 0.0f, 0.0f );
			rigidbody2D.velocity = Vector3.zero;
		}

		Debug.Log ( this.gameObject.GetComponent<PolygonCollider2D>( ) );
	}

	void OnTriggerEnter2D( Collider2D collidedObject )
	{
		if (collidedObject.tag == "Player")
		{
			transform.position = new Vector3 (0.0f, 0.0f, 0.0f);
			rigidbody2D.velocity = Vector3.zero;
		}
	}
}
