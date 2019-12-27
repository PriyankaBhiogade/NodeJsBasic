let randomNum = [];

for(let i = 0; i < 10; i++){
        let randomCheck = Math.floor(Math.random() * 899 + 100);
        randomNum[i] = randomCheck;
}

function sort(randomNum){
        let sortedArray = randomNum.sort()
        return sortedArray;
}

sortedArray = sort(randomNum)
console.log("10 Sorted Number : ",sortedArray);
console.log("2nd Largest Number : ",sortedArray[1],
                "\n2nd Smallest Number : ", sortedArray[8]);






