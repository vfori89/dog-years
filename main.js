//DOG YEARS
//my age variable
var myAge = 35;
//first two years of dog life 
var earlyYears = 2;

earlyYears *= 10.5;
//create variable for the rest of my age after 2 is subtracted
var laterYears = myAge - 2;
//calculate the dog years
laterYears *= 4;
//created variable with the total dog years
let myAgeInDogYears = earlyYears + laterYears;

//created myName variable witht the function that makes all letters lowercase.
let myName = 'Vladimir'.toLowerCase();
//print out the results in the console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

