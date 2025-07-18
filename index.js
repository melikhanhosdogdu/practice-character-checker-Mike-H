const readlineSync = require('readline-sync');


let inputString = readlineSync.question("Enter a word or phrase: ");

let index = readlineSync.question("Enter an index number to check: ");


index = Number(index);

if (index >= 0 && index < inputString.length) {
  let character = inputString[index];
  console.log("The character at index " + index + " is: " + character);
} else {
    
  console.log("Invalid index! Please enter a number between 0 and " + (inputString.length - 1));
}
