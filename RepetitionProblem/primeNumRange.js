let read = require('readline-sync');
let num = read.question("Enter Number : "); 
let result = "" ;
let temp = 0;
if (num >= 1 && num <= 1000) {
	for (let i = 0; i <= num; i++) {
		for (let j = 0; j <= i; j++) {
			if (i % j == 0)
			temp = temp + 1;
		}
		if (temp == 2) {
			console.log("Number is Prime " + i + " ");
			result = result + i +" ";
		}
	}
	console.log("Result",result);
}else
	console.log("Number in between 0 to 1000:")
