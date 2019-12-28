let readlineSync = require('readline-sync');
let first = 0;
let last = 100;
let mid ;
let flag = false;
while ( flag == false ){
	mid = parseInt((first + last) / 2);	
	console.log(mid);
	let choice = readlineSync.questionInt('1.less\n2.greater\n3.this\nplease enter the Your choice : ');
	if(choice==1){
		last=mid-1;
	}
	if(choice==2){
		first=mid+1;
	}
	if(choice==3){
		console.log("your magic number is : "+mid );		
		flag = true;
	}
}
