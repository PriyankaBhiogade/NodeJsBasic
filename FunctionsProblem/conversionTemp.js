let read = require('readline-sync');

console.log(" 1.Celsius to Fahrenheit :\n 2.Fahrenheit to Celsius : ")
let choice= read.questionInt("\nEnter your choice :");
switch(choice){
case 1: {
	let celsius = read.question("Enter The temperature : ");
	let result = convertToF(celsius);
	console.log("Celsius to Fahrenheit converstion : ",result);
	break;
}
case 2:{
	let fahrenheit= read.question("Enter The temperature : ");
	let result = convertToT(fahrenheit);
	console.log("Fahrenheit to Celsius converstion : ",result);
	break;
}
default:
	console.log("Invalid Input");
}

function convertToF(celsius) {
	let fahrenheit;
	return  fahrenheit = (celsius * (9 / 5)) + 32;
}

function convertToT(fahrenheit) {
	let celsius;
	return celsius = (fahrenheit - 32) * 5 / 9;
}
