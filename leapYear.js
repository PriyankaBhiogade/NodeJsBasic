let read = require('readline-sync');
let year= read.questionInt("Enter the year :");
if (year > 999 && year <=9999)
	if ((year % 100 != 0)&& (year % 4 == 0) || (year % 400 == 0)) 
		console.log(year + " is leap year ")
	else
		console.log(year + ' is not leap year')
else
	console.log("Year must be a 4 digit");
