let read = require('readline-sync');
let number = process.argv[2];
let power = 1;
	for(let i = 0; i <= number; i++){
		console.log("2^" + i + " = " + power);
		power = power * 2;
	}
