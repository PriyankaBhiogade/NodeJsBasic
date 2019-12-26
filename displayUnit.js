let read = require('readline-sync');
let num = read.questionInt("Enter Number : ");
let word;
if (num == 1)
	word ="Unit";
else if(num == 10)
        word ="Ten";
else if(num == 100)
        word ="Hundred";
else if(num == 1000)
        word ="Thousand";
else if(num == 10000)
	word ="Ten Thousand";
else if(num == 100000)
        word ="Lakh";
else if(num == 1000000)
	word ="Ten Lakh";
else
	console.log("Invalid number");
console.log(num,":",word);



