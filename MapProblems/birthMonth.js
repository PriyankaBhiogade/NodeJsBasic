let months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
let personMap = new Map();
let personList = [];

for(let i = 1; i <= 12; i++){
	personList[i] = new Map();
}

for(let i = 1;i <= 50; i++){
	month = Math.floor(Math.random()* 10) % 12 + 1;
	personMap.set(months[month],personList[month].set(i,"person "+i));
}

console.log(personMap);
