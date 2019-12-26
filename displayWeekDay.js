let read =require ('readline-sync');
let num = read.questionInt("Enter Number: ");
let day;
switch(num) {
case 1:
        day ="Monday";
	break;
case 2:
        day ="Tuesday";
	break;
case 3:
        day ="Wednesday";
	break;
case 4:
        day ="Thursday";
	break;
case 5:
        day ="Firday";
	break;
case 6:
        day ="Saturday";
	break;
case 7:
        day ="Sunday";
	break;
default:
	console.log("Invalid Number");
}
console.log(num,":",day);
