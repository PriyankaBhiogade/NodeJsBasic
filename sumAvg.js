let count = 0 ;
let sum = 0;

for(let i = 0; i<5; i++){
	let randomNum = Math.floor(Math.random() * 90 + 10);
	sum = sum + randomNum;
	count++;
}

let avg = sum / count;


