let EMP_RATE_PER_HOUR = 20;
let empHrs = 0;
let empWage = 0;
let isPresent = 1;
let empCheck = Math.floor(Math.random() * 2);
if(empCheck  == isPresent)
	empHrs = 8;
else
	empHrs = 0;
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("Daily Employee Wage:",empWage);
