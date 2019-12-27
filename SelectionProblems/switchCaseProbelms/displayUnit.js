let read = require('readline-sync');
let num = read.questionInt("Enter Number : ");
let word;
switch(num){
case 1:
	word ="Unit";
	break;
case 10:
        word ="Ten";
	 break;
case 100:
        word ="Hundred";
	 break;
case 1000:
        word ="Thousand";
	 break;
case 10000:
	word ="Ten Thousand";
	 break;
case 100000:
        word ="Lakh";
	 break;
case 1000000:
	word ="Ten Lakh";
	break;
default:
	console.log("Invalid number");
}
console.log(num,":",word);



