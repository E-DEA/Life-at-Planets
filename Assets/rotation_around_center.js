#pragma strict

var rotationSpeed = 0.25;

function Update() { transform.Rotate(0,rotationSpeed * Time.deltaTime,0); }