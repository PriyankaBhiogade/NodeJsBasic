let FEET = 1;
let INCH = 12;
let givenInchVal =42;
let feetToInch = FEET * INCH;
console.log("42 in = ",givenInchVal / feetToInch ,"ft");

let width = 60 ;
let length = 40 ;
let oneFeetToMeter = 0.3048 ;
let areaInFeet = width * length ;
console.log("Area of Rectangle in feet : ",areaInFeet);
console.log("Area of Rectangle in Meter : "
,Math.floor(areaInFeet / oneFeetToMeter)); 

let givenPlots = 25;
let oneMeterToAcre = 0.00025;
let area = (givenPlots * oneMeterToAcre);
console.log("Area of 25 plots :", area,"m");
