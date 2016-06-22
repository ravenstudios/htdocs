
'use strict';
var angle = 0;

var slider;


function setup(){

	createCanvas(400, 400);
	slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw(){
	
	background(51);

	angle = slider.value();
	stroke(255);
	translate(200, height);
	branch(100);
	//snowFlake(50);
	

}

function branch(len){
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);
	
	stroke(r, g, b);

	line(0, 0, 0, -len);	
	translate(0, -len);
	
	if(len > 4){
		push();
		rotate(angle);
		branch(len * 0.67);
		pop();
		push();
		rotate(-angle);
		branch(len * 0.67);
		pop();
	}
	
	// line(0, 0, 0, -len * 0.7);


}

function snowFlake(len){
	var reduction = 0.90;
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);
	
	stroke(r, g, b);

		
	translate(200, 200);
	
	
	if(len > 4){
		push();
		rotate(angle);
		branch(len * reduction);
		pop();
		push();
		rotate(angle * 3);
		branch(len * reduction);
		pop();
		push();
		rotate(-angle);
		branch(len * reduction);
		pop();
		push();
		rotate(-angle *3);
		branch(len * reduction);
		pop();
		
		push();
		rotate(angle * 6);
		branch(len * reduction);
		pop();
		
		push();
		rotate(-angle *6);
		branch(len * reduction);
		pop();
	}
}