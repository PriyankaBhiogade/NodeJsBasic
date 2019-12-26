let read = require('readline-sync');
let a = read.questionInt("Enter First Num : ");
let b = read.questionInt("Enter Second Num : ");
let c = read.questionInt("Enter Third Num : ");

let opration1 = a + b * c;
let opration2 = a % b + c;
let opration3 = c + a / b;
let opration4 = a * b + c;

let maxNum = opration1;
let minNum = opration1;

if( opration2 > maxNum)
	maxNum = opration2;
else if(opration3 > maxNum)
	maxNum = opration3;
else if(opration4 > maxNum)
	maxNum = opration4;
else
	console.log("Invalid Input");

if( opration2 < minNum)
        minNum = opration2;
else if(opration3 < minNum)
        minNum = opration3;
else if(opration4 < minNum)
        minNum = opration4;
else
        console.log("Invalid Input");


console.log("Max Num :",maxNum);
console.log("Min Num :",minNum);
