// practice problem 1
/** harry calculate how much money the shopkeeper will return*/
var harryMomGiveTk = 1000;
var orangePrice = 250;
var applePrice = 350;

console.log("have taka harry");
console.log(harryMomGiveTk);

var totalCost = orangePrice + applePrice;

console.log("Harry Total cost");
console.log(totalCost);

var shopkeeperReturn = harryMomGiveTk - totalCost;

console.log("Shopkeeper return tk");
console.log(shopkeeperReturn);

console.log("**************** end ****************");


// practice problem 2
/** this program calculate average mark */

var math = 75.25;
var bio = 65;
var chem = 80;
var phys = 35.45;
var bang = 99.50;

var totalMark = math + bio + chem + phys + bang;
var average = totalMark / 5;
average = parseFloat(average.toFixed(2));

console.log("Average mark");
console.log(average);

console.log("**************** end ****************");

// practice problem 3
/** combine tow string and print them in one line */
var string1 = "I am going to be";
var string2 = "an awesome web developer";
var combineString = string1 + " " + string2;

console.log("first string");
console.log(string1);

console.log("last string");
console.log(string2);

console.log("combine two string");
console.log(combineString);

console.log("**************** end ****************");

// practice problem 4
/** this program print reminder */

var number = 119;
var divided = 5;

var reminder = number % divided;

console.log("reminder")
console.log(reminder);
