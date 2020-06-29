console.log("square of 9 is", 9**2);
let a = 10, b = 20;

console.log("Numbers before swap", a, b);
[a, b ] = [b, a];
console.log("Numbers after swap", a, b);

let c = 50;
console.log("Addition of 3 Numbers "+a+" "+b+" "+c, a + b + c);

let celcius = 32;
let fahrenhiet = (celcius * (9/5)) + 32;
console.log("Convertion of celcius of 32 to Fahrenheit is ",fahrenhiet);

let meter = 20;
let miles = meter * 0.00062137;
console.log("Convertion of meter of 20 to miles is ",miles);

let pounds = 40;
let kilogram =  pounds * 0.45359237;
console.log("Convertion of pounds of 40 to kilogram is ", Math.round(kilogram));

let battingScore = [90, 46, 38, 67, 55];
let sumOfScores = battingScore.reduce((acc,value) => acc+=value,0)
console.log("Batting average of score "+ battingScore.join(' ')+" is",sumOfScores/battingScore.length);

let testScore = [90, 88, 85, 77, 84];
let sumOfTest = testScore.reduce((acc,value) => acc+=value,0)
console.log("Batting average of score "+ testScore.join(' ')+" is",sumOfTest/testScore.length);

console.log("Power of number 20 and 5 is ", Math.pow(20,5));

let principle = 10000;
let ratePercent = 3.875;
let timeInYears = 5;
let ratePerYear = ratePercent/100;
let interest = principle * (1 + (ratePerYear * timeInYears));
console.log("The simple interest is", interest);

let lengthOfSides = 7;
let areaOfEq = (Math.sqrt(3) / 4) * Math.pow(lengthOfSides,2);
console.log("Area of Equilateral Triangle with length of side as 8 is", Math.round(areaOfEq));

let base = 20;
let height = 10;
let areaOfIso = 0.5 * base * height;
console.log("Area of isosceles Triangle with base of 20 and height of 10 is", areaOfIso);

let radiusOfSphere = 20;
let volumeOfSphere = (4/3) * Math.PI * Math.pow(radiusOfSphere, 2);
console.log("The raidus of sphere is",Math.round(volumeOfSphere));

let prismLength = 5, prismWidth = 10, prismHeight = 20;
let volumeOfPrism = prismLength * prismWidth * prismHeight;
console.log("The raidus of prism is",volumeOfPrism+"cubic units");

let baseOfTriangle = 8;
let heightOfTriangle = 10;
let areaOfTriangle = (baseOfTriangle * heightOfTriangle) / 2;
console.log("The area of a triangle is", areaOfTriangle);

let actualCost = 2500, soldCost = 1800;
let discount = (actualCost / soldCost) * 100;
console.log("The discount is", Math.round(discount))

let radius = 10;
let diameter = radius * 2;
let area = Math.PI * Math.pow(radius,2);
let circumference = 2 * Math.PI * radius;
console.log("With radius of 10 for circle diameter is",diameter,"and area is", Math.round(area),"and circumference is ",Math.round(circumference))

let x = 20, y =10;
console.log("20  10 Addition", x+y, "Subtraction", x-y, "Multiply", x*y, "Division", x/y, "Modulo", x%y);

let pattern = "*****\n";
console.log(pattern.repeat(5));

let wattsPerHour = 100;
let wattsPerMonths = 100 * 24 * 30;
let costPerUnit = 10;
console.log("Electricity bill is ",(wattsPerMonths / 1000) * costPerUnit);

let english , hindi, maths, science, socialStudy, CGPA, CGPAper ;  
english = 9.1;  
hindi = 8.5;  
maths = 9.5;  
science =9.6;  
socialStudy = 8.6;  
CGPA = (english + hindi + maths + science + socialStudy)/(5);  
CGPAper = (9.5 * (CGPA));  
console.log("CGPA an d it's percentage is", CGPA, Math.round(CGPAper));