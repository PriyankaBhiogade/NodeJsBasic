let read = require('readline-sync');
let num =read.question("Enter the number :");

function checkPrime(num){
let flag = 0;
let length = num / 2;
if(num == 0 || num == 1)
	console.log("Invalid Number...");
else{
	for(let i = 2; i <= length; i++){
		if(num % i == 0){
			flag = 1;
			return false;
			break;
		}
	}
	if(flag == 0)
		return true;
}
}

function getPalindrome(num){
let rem, temp, final = 0;
temp = num;
while( num > 0 ){
	rem = num % 10;
	num = parseInt(num / 10 );
	final = final * 10 + rem;
}
	return final;
}


let resultPrime = checkPrime(num);
if(resultPrime == true){
	let resultPalindrome = getPalindrome(num);
	let finalResult = checkPrime(resultPalindrome);
		if(finalResult == true)
			console.log(resultPalindrome,"Number is Prime");
		else
			console.log(resultPalindrome,"Number is Not Prime");
}else
	console.log(num+" is Not Prime Number");

