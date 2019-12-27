let randomValues = [];
let maxNum;
let minNum;

for(let i = 0; i < 5; i++){
	let randomCheck = Math.floor(Math.random() * 899 + 100);
	randomValues[i] = randomCheck;
}

//MaxNum
if (( randomValues[0] > randomValues[1]) && ( randomValues[0] > randomValues[2])
	 && ( randomValues[0] > randomValues[3]) && ( randomValues[0] > randomValues[4]))
		maxNum = randomValues[0];
else if (( randomValues[1] > randomValues[0]) && ( randomValues[1] > randomValues[2]) 
	&& ( randomValues[1] > randomValues[3]) && ( randomValues[1] > randomValues[4]))
        	maxNum = randomValues[1];
else if (( randomValues[2] > randomValues[0]) && ( randomValues[2] > randomValues[1]) 
	 && ( randomValues[2] > randomValues[3]) && ( randomValues[2] > randomValues[4]))
       		maxNum = randomValues[2];
else if (( randomValues[3] > randomValues[0]) && ( randomValues[3] > randomValues[2]) 
	&& ( randomValues[3] > randomValues[4]) && ( randomValues[3] > randomValues[1]))
	        maxNum = randomValues[3];
else if ((randomValues[4] > randomValues[0]) && ( randomValues[4] > randomValues[2]) 
	&& ( randomValues[4] > randomValues[3]) && (randomValues[4] > randomValues[1]))
	        maxNum = randomValues[4];

//MinNum
if (( randomValues[0] < randomValues[1]) && ( randomValues[0] < randomValues[2])
         && ( randomValues[0] < randomValues[3]) && ( randomValues[0] < randomValues[4]))
                minNum = randomValues[0];
else if (( randomValues[1] < randomValues[0]) && ( randomValues[1] < randomValues[2]) 
        && ( randomValues[1] < randomValues[3]) && ( randomValues[1] < randomValues[4]))
                minNum = randomValues[1];
else if (( randomValues[2] < randomValues[0]) && ( randomValues[2] < randomValues[1]) 
         && ( randomValues[2] < randomValues[3]) && ( randomValues[2] < randomValues[4]))
                minNum = randomValues[2];
else if (( randomValues[3] < randomValues[0]) && ( randomValues[3] < randomValues[2]) 
        && ( randomValues[3] < randomValues[4]) && ( randomValues[3] < randomValues[1]))
                minNum = randomValues[3];
else if ((randomValues[4] < randomValues[0]) && ( randomValues[4] < randomValues[2]) 
        && ( randomValues[4] < randomValues[3]) && (randomValues[4] < randomValues[1]))
		minNum = randomValues[4];



