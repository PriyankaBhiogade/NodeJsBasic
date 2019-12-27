
let numberDictionary = new Map();
let flag = 0;
let counter = 0;
let max = 0;

for(let i=1;i<=6;i++){
	numberDictionary.set(i,0);
}

while (flag == 0){
	let die = Math.floor(Math.random() * 6) + 1;
	numberDictionary.set(die,numberDictionary.get(die)+1);
	if(numberDictionary.get(die) > max){
		max = numberDictionary.get(die);
}
	if(max > 9){
		flag = 1
	}
}
console.log(numberDictionary);

function findMaxNumber(){
 for(let roll of numberDictionary.entries()) {
      if(roll[1] == 10) {
         var key = roll[0], value = roll[1];
         console.log(key, value)
      }
   }
}
findMaxNumber()
