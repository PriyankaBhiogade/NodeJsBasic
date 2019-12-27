let read = require('readline-sync');
let num = process.argv[2];
let result=0.0;
let temp =0.0;
if (num > 0) {
	console.log("Harmonic series of " + num + " number = ");
	for (let i = 1; i <= num; i++) {
		result += 1/i;
		console.log("Result is:"+(temp+1/i) )
		if (i == num)
			break;
		console.log("Final Result:"+result)
	}
} else
	console.log("Number must be greater than zero")
