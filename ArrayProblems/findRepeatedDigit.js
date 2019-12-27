let array = [];
for(let i = 1; i < 100;i++){
	let a = parseInt(i / 10);
	let b = i % 10;
	if( a == b)
	array.push(i);
}
	console.log("Repeated Twice Number are:", array);

