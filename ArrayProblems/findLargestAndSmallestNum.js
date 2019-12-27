let randomNum = [];

for(let i = 0; i < 10; i++){
	let randomCheck = Math.floor(Math.random() * 899 + 100);
	randomNum[i] = randomCheck;
}

console.log("10 Random Number : ",randomNum);
largestNum = getSecondLargest(randomNum);
smallestNum = getSecondSmallest(randomNum);
console.log("2nd Largest Number : ",largestNum,
		"\n2nd Smallest Number : ", smallestNum);

function getSecondLargest(randomNum){
    let first = 0,second = 0;
    for(let i = 0; i < randomNum.length; i++){
        if(randomNum[i] > first){
            second = first;
            first = randomNum[i];
        }
        else if(randomNum[i] > second && randomNum[i] < first){
            second = randomNum[i];
       } 
    }
    return second;
}

function getSecondSmallest(randomNum){
    let first = 999,second = 999;
    for(let i = 0; i < randomNum.length; i++){
        if(randomNum[i] < first){
            second = first;
            first = randomNum[i];
        }
        else if(randomNum[i] < second ){
            second = randomNum[i];
       } 
    }
    return second;
}

