let read = require('readline-sync');
let num = read.questionInt("Enter Single Digit Num : ");
let word;
switch(num){
case 0:
	word ="Zero";
	break;
case 1:
        word ="One";
	break;
case 2:
        word ="Two";
	break;
case 3:
        word ="Three";
	break;
case 4:
        word ="Four";
	break;
case 5:
        word ="Five";
	break;
case 6:
        word ="Six";
	break;
case 7:
        word ="Seven";
	break;
case 8:
        word ="Eigth";
	break;
case 9:
	word = "Nine";
	break;
default:
	console.log("Enter Only Single Digit Number");
}
console.log(num,":",word);
