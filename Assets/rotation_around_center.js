#pragma strict

var rotationSpeed = 0.25;

function FixedUpdate() { transform.Rotate(0,rotationSpeed * Time.deltaTime,0); }