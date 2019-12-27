let read = require('readline-sync');
let inputNumber = read.question('Please enter an Number : ');
let total = 1;

for (i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);
}
console.log(inputNumber + '! = ' + total);

