let read = require('readline-sync');

let feet = read.question("Enter Feet value :");
let inch = read.question("Enter Inch value :");
let meter =read.question("Enter meter value :");

console.log(" 1:Feet to Inch\n 2:Feet to Meter\n 3:Inch to Feet\n 4:Meter to Feet");

let choice = read.questionInt("Enter your Choice :");

switch (choice){
case 1:
	let feetToInch = feet * inch;
	break;
case 2:
	let feetToMeter = feet / 3.281;
	break;
case 3:
	let inchToFeet = inch / 12;
	break;
case 4:
	let meterToFeet = meter * 3.281;
	break;
default:
	console.log("Invalid Input");
}


