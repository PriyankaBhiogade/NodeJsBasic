let read = require('readline-sync');
let flag = 0;
let min = 0;
let max = 100;
let mid;
while ( flag == 0 ){
	mid = (min + max / 2);
	console.log("Is Magic Number is Less or Greater or Same ",mid);
	console.log(" 1.Greater/n 2.Less/n 3.MagicNum");
	let num = read.questionInt("Enter Your Choice: ");
switch(num){
case 1:
	min = mid-1;
	break;
case 2:
	max = mid+1;
	break;
case 3:
	console.log("Magic Num is :",mid);
	flag = 1;
	break;
}
}
