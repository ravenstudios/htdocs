
function calc(){

	var x, y, sum;

	x = parseInt(document.getElementById("num1").value);
	y = parseInt(document.getElementById("num2").value);
	//sum = x + "*"  + y;
	





	var op = document.getElementById("op").value;

	// if(op === "+"){
	// 	sum = x + y;
	// }

	// if(op === "-"){
	// 	sum = x - y;
	// }

	// if(op === "*"){
	// 	sum = x * y;
	// }

	// if(op === "/"){
	// 	sum = x / y;
	// }

	// if(op === "%"){
	// 	sum = y % x;
	// }
	console.log("op: " +  op);
	switch(op){

		case "+":
		sum = add(x, y);
		console.log("add: " + sum);
		break;
		
		case "-":
		sum = sub(x, y);
		break;

		case "*":
		sum = mul(x, y);
		break;

		case "/":
		sum = div(x, y);
		break;

		case "%":
		sum = mod(x, y);
		break;
	}

	console.log(sum);
	document.getElementById("num3").value = sum;




}

function add(x, y){
	return x + y;
}

function  sub(x, y){
	return x - y;
}

function  mul(x, y){
	return x * y;
}

function div(x, y){
	return x /y;
}

function mod(x, y){
	return y % x;
}

var number = 10;

for(var i = 0; i < number; i++){

	console.log("number = " + i);

}










