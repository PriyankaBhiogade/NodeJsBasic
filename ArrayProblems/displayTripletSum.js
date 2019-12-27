let read = require('readline-sync');

let array = [];
let n =read.question("Enter size of array: ");
for(let i=0;i <n;i++) {
	array[i]=read.question('Enter elements on ' +i+ ' position : ');
}

triplet(array)

function triplet(array){
if (array.length != 0) {
            for (let i = 0; i < array.length - 2; i++) {
                for (let j = i + 1; j < array.length - 1; j++) {
                    for (let k = j + 1; k < array.length; k++) {
                        if (parseInt(array[i]) + parseInt(array[j]) + parseInt(array[k]) == 0) {
                            console.log("Triplet is " + array[i] + ", " + array[j] + ", " + array[k]);
                        }
                    }
                }
            }
        }
else
	console.log("invalid Input ");
}

