var num1, num2, n , start;

start = 1;
num1 = 0;
num2 = 0;
n = 10;

function fib(temp){
	
	if(n > 0){
		if(temp + num1 === 1){
			console.log(temp);
			console.log(temp);
		num1 = temp;
		num2 = temp + num1;
		
		n--;
		
		console.log(num2);
		fib(num2);
		}
		else{
			num2 = num1 + temp;
			num1 = temp;

			console.log(num2);
			n--;
			fib(num2);

		}
	}	
	

}