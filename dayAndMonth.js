let day = process.argv[2];
let month = process.argv[3];

var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

if (day > 20 && day <= 31 && months[month - 1] === "MAR")
console.log("true");
else if (day >= 1 && day < 30 && months[month - 1] === "APR")
console.log("true");
else if (day >= 1 && day <= 31 && months[month - 1] === "MAY")
console.log("true");
else if (day >= 1 && day < 20 && months[month - 1] === "JUN")
console.log("true");
else
console.log("false");
