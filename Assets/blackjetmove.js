#pragma strict

var speed : float = 1000;
var flag : boolean = false;
public var rx : float = 0;
public var ry : float = 0;
public var rz : float = 0;
public var drx : float = 0;
public var dry : float = 0;
public var drz : float = 0;

// Use this for initialization
function Start () {

}
// Update is called once per frame
function FixedUpdate () {
if(Time.time > 11)
{
	ry += dry;
	rz += drz;		
	if(flag==false) 
	{
		drz = Time.deltaTime * 5;
		dry = Time.deltaTime * 5;
		if(ry > 45) flag = true;
	}
	else
	{
		drz = Time.deltaTime * 5;
		dry = -Time.deltaTime * 5; 
		if(ry < 0) flag = false;
	}
	transform.Translate(0, 0, Time.deltaTime * speed);
	//	transform.Rotate(0,dry, drz);
	}
}
