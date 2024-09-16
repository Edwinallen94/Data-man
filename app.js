// Part 1: Math Problems
// naning variables
const numOne = 9; // This is the first number
const numTwo = 14; // This is the second number
const numThree = 23; // This is the third number
const numFour = 8; // This is the fourth number

//Checking if all numbers are divisible by 5
const allNumbersDivisibleBy5 =
  numOne % 5 === 0 &&
  numTwo % 5 === 0 &&
  numThree % 5 === 0 &&
  numFour % 5 === 0;
console.log("All numbers are divisible by 5:", allNumbersDivisibleBy5); //true if all numbers are divisible

// Checking if the first number is larger than the last number
const firstNumberLargerThanLast = numOne > numFour;
console.log(
  "The first number is larger than the last number:",
  firstNumberLargerThanLast
); //(boolean) true or false

//find the remainder when divided by numFour; // Then multiply the result by numThree
const numberResult = ((numTwo - numOne) * numThree) % numFour; // Subtract numOne from numTwo
console.log("Result of number arithmetic chain:", numberResult); // Print the result

// I Renamed the variable and check if any number is greater than 25
// Instead of using !, I check each number directly
const anyNumberGreaterThan25 =
  numOne > 25 || numTwo > 25 || numThree > 25 || numFour > 25;
console.log("Is any number greater than 25:", anyNumberGreaterThan25); // Should print true if any number is greater than 25

//part 2 pratctical math

// Distance of the trip
const tripDistanceMiles = 1500; // Total miles for the trip

// Fuel efficiency and budget setup
const fuelEfficiency55mph = 30; // Miles per gallon at 55 mph
const fuelEfficiency60mph = 28; // Miles per gallon at 60 mph
const fuelEfficiency75mph = 23; // Miles per gallon at 75 mph
