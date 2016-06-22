'use sctrict';
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grid = [];
var gridSize;
var queens =[]; 
var crashProction = 0;
var tempLocation; 
var puzzleSize = 8;


function setup(){
	gridSize = puzzleSize * puzzleSize;

	
	for(var i =0; i < gridSize; i++){
		grid[i] = false;
	}
	drawGrid();


}
function drawGrid(){



		var size = 50;

	ctx.beginPath();
	ctx.lineWidth = "2";
	ctx.strokeStyle = "black";
	for(var i = 0; i < puzzleSize; i++){

		for (var j = 0; j < puzzleSize; j++) {
			
			ctx.rect(j * size, i * size, size, size);  
			ctx.stroke();
		}


	}
}

function drawQueen(x, y){
	// ctx.clearRect(0, 0, 400, 400);
	// ctx.beginPath();
	x = x *100;
	y = y * 100;
	var boxSize = 25;
	ctx.strokeStyle = "red";
	ctx.rect(x + boxSize / 2, y + boxSize / 2, boxSize, boxSize);  
	ctx.stroke();
}


function placeQueen(x, y){

	drawQueen(x, y);
	grid[(y * puzzleSize) + x] = true;
	
	// for(var i =0; i < gridSize; i++){
	// 	console.log("grid " + i + " : " + grid[i]);
	// }
}

function draw(){

ctx.clearRect(0, 0, 400, 400);
	ctx.beginPath();

drawGrid();
	for(var i =0; i < gridSize; i++){
		if(grid[i] === true){
			
			var y = Math.floor(i /puzzleSize);
			var x = i % puzzleSize;
			
			drawQueen(x, y);
		}
	}

}

var count = 0;
function solve(n){
	count++;
	console.log("count: " + count);

	if(n < 0){
		console.log("n less than 0");
		return;
	 } 

	if(n === puzzleSize){
		draw();
		console.log("Solved");

		for(var gridBoo = 0; gridBoo < gridSize; gridBoo++){

				//console.log("Bool:" + gridBoo + " = " + grid[gridBoo]);
			}
		return;
	}
	console.log("crash num " + crashProction);
	if(crashProction > 500){

		console.log("stoped running due to infinite loop");
		// exit();
		// return;
	}
	
	//tempLocation = 0;

		var y;
		var x;
	///////////////////////////LOOP/////////////////////////
	for(var gridCord = 0; gridCord < puzzleSize; gridCord++){  //runs through the grid array to check if a spot is safe  *********** change to size 4 ******** 
		
		if(x === puzzleSize - 1){
			break;
		}	
		y = n;	

		if(tempLocation !== undefined){
		

		console.log("temp: " + tempLocation);
		x = tempLocation + gridCord; //	forces to always count above last positiom
		// tempLocation = 0;

		 

		}

		else{
		
		 x = gridCord;
		}

		console.log("Grid x: " + x + " y:" + y);
		if(isSafe(x, y)){

			placeQueen(x, y); //places queen
			queens[n] = cordToNumber(x, y); //sets queens to spot on grid
			grid[cordToNumber(x, y)] = true; //sets the index on grid to occupied
			console.log("PLACED QUEEN " + n + " AT " + cordToNumber(x, y) + "******************************");
						

			n++; //incruments n
			crashProction++;
			draw();
			tempLocation = undefined;
			solve(n);

			return;

		}
			
			
	}

	console.log("cant place queen " + n + "************************");
	n--;
	console.log("removed queen " + (n) + " at location " + queens[n]);

	console.log("q:" + queens[n]);
	console.log("queen test:" + numToCord(queens[n]));

	if(numToCord(queens[n]) === 7){ ///////////////not going to work because 7 mabey ok
		console.log("go back 1 more queen");
		n--;
		tempLocation = numToCord(queens[n] + 1);
		grid[queens[n]] = false;
		queens[n] = undefined;
	
	    crashProction++;
		solve(n);
		return;		
	}

	tempLocation = numToCord(queens[n] + 1);
	
	grid[queens[n]] = false;
	queens[n] = undefined;
	
	crashProction++;
	

			
	solve(n);
	return;	

}

function isSafe(x, y){

	console.log("Safe Called with " + x + ", " + y);
	if(horz(x, y)){
		return false;
	}


	if(vert(x, y)){
		return false;
	}


	if(upLeft(x, y)){
		return false;
	}


	if(upRight(x, y)){
		return false;
	}
	//console.log("Grid x: " + x + ", y: " + y + " is safe");
	return true;
}

function horz(inX, inY){

	var x = inX;
	var y = inY;
	while(x !== -1 ){
		if(grid[cordToNumber(x, y)] === true){
			//console.log("Horz Grid " + cordToNumber(x, y) + " at x:" + x + ",y: " + y +" is not safe");
			return true;
		}
		x = x -1;
		
	}
}

function vert(x, y){

	//console.log("vert x:" + x + " y:" + y);
	while(y !== -1 ){
		if(grid[cordToNumber(x, y)] === true){
			//console.log("vert Grid " + cordToNumber(x, y) + " at x:" + x + ",y: " + y +" is not safe");
			return true;
		}
		y = y -1;
		
	}
}

function upLeft(x, y){

	while(x > 0 && y > 0 ){
		if(grid[cordToNumber(x -1, y -1)] === true){
			//console.log("upLeft -Grid " + cordToNumber(x, y) + " at x:" + x + ",y: " + y +" is not safe");
			return true;
		}
		x = x -1;
		y = y -1;
	}
}

function upRight(x, y){

	while(x !== puzzleSize - 1 && y > 0 ){
		//console.log("checking cords x: " + x + " ,  y: " + y +"   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		if(grid[cordToNumber(x +1, y -1)] === true){
			//console.log("upRight -Grid " + cordToNumber(x, y) + " at x:" + x + ",y: " + y +" is not safe");
			return true;
		}
		x = x +1;
		y = y -1;
	}
}








function cordToNumber(x, y){
	return (y * puzzleSize) + x;
}

function numToCord(num){

	return num % puzzleSize;
	//this.y = Math.floor(num /puzzleSize);
}

setup();

draw();

//solve(0);