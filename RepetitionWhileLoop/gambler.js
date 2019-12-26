let read = require('readline-sync')
let cash = 100;
let goal = 200;
let bet = 1;
let i = 1;
let wins = 0;
let loss = 0;
if (goal <= cash)
            console.log("goal is less than or equal to cash");
else {
	while (i <= bet ) {
		if (Math.random() < 0.5) {
			loss++;
			cash = cash--;
		}
		else {
			wins++;
			cash = cash++;
		}
	}
}
if (cash >= goal)
	console.log("reached goal...");
else
	console.log("can't reach the goal...");
