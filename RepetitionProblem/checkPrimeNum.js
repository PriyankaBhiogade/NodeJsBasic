let read = require('readline-sync');
let num = read.questionInt("Enter Single Digit Num : ");
let flag = 0;
let length = num / 2;

if(num == 0 && num == 1){
	console.log("Invalid Number");
}
for(let i = 2; i <= length; i++)
if(num % 2 == 0 && num != 0)
	console.log("Is Prime number");
	flag = 1;
	break;
}
}
if(flag == 0){
	console.log("Is Not Prime Number");
}
}
