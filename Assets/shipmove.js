#pragma strict

public var speed:float = 0.5;
public var rotation_speed = 4;
var dspeed:float = 5.2;
var dacc:float = 2*dspeed/0.5;
var ini:float = 0;
// Use this for initialization
function Start () {
}

// Update is called once per frame
function FixedUpdate () {
	if ( Time.time < 6 ){
		transform.Translate(0,speed*Time.deltaTime,0);
	}
	var acc:float = speed/2;
	if ( Time.time > 6 && Time.time < 7 ){
		transform.Rotate(-rotation_speed*Time.deltaTime,0,0);
		transform.Translate(0,speed*Time.deltaTime,0);
		speed -= acc*Time.deltaTime;
	}
	if ( Time.time > 7 && Time.time < 8 ) {
		transform.Rotate(rotation_speed*Time.deltaTime,0,0);
		transform.Translate(0,speed*Time.deltaTime,0);
		speed -= acc*Time.deltaTime;
	}
	if ( Time.time > 8 && Time.time < 9 ){
		transform.Translate(0,0,-ini*Time.deltaTime*40);
		ini += dacc;
	}
	if ( Time.time > 9 && Time.time < 10 ){
		transform.Translate(0,0,-ini*Time.deltaTime*40);
		ini -= dacc;
	}
}