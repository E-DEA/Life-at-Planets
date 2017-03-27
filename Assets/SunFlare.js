#pragma strict

var s : float = 1;
var flag : boolean = false;

function Start () {
	
}

function FixedUpdate () {
	if(flag==true)
	{
		s += 0.01 * 2 * Random.value;
		if(s > 1)flag = false;
	}
	else
	{
		s -= 0.01 * 2 * Random.value;
		if (s < 0)flag = true;
	}
	transform.Rotate(Random.value,Random.value,Random.value);
	transform.localScale = new Vector3(s,s,s);
}
