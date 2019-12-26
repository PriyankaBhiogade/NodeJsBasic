let read =require ('readline-sync');
let num = read.question("Enter Number: ");
let day;
if(num == 1)
        day ="Monday";
else if(num == 2)
        day ="Tuesday";
else if(num == 3)
        day ="Wednesday";
else if(num == 4)
        day ="Thursday";
else if(num == 5)
        day ="Firday";
else if(num == 6)
        day ="Saturday";
else if(num == 7)
        day ="Sunday";
else
	console.log("Invalid Number");

console.log(num,":",day);
