let head = 1;
let counter = 1;
while ( counter <= 11){
let randomCheck = Math.floor(Math.random() * 2);
if (randomCheck == head){
	console.log("Heads");
	counter++;
}
else{
	console.log("Tails");
	counter++;
}
}
