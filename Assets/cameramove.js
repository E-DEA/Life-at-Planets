#pragma strict

var rotationSpeed = 0.25;

function Start () {
	
}

function FixedUpdate () {
	if(Time.time > 8)
	{
	transform.Rotate(0,rotationSpeed * Time.deltaTime,0);
	}
}
