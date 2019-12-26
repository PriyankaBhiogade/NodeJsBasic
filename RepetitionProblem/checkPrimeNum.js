let read = require('readline-sync');
let num = read.questionInt("Enter Number : ");
let flag = 0;
let length = num / 2;

if(num == 0 || num == 1)
	console.log("Invalid Number...");
else{
	for(let i = 2; i <= length; i++){
		if(num % i == 0){
			console.log(num+" is Not Prime Number");
			flag = 1;
			break;
		}
	}
	if(flag == 0)
		console.log(num+" is Prime Number");
}
