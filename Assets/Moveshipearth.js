#pragma strict

var speed : float = 100;

function Start () {
	
}

function FixedUpdate () {
if(Time.time > 16)
{
transform.Translate(Time.deltaTime * speed,0,0);
}
}
