let read = require('readline-sync');
let num = read.question("Enter the number in between 1 to 100 :");
let i = 0;
let mid = num / 2;
while ( i < mid || i > mid ){
	
	console.log("magic Number",num);
	i++;
}
