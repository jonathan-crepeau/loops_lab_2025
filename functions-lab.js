// • Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

// function printGreeting(name) {
//   return 'Hello ' + name;
// }

// console.log(printGreeting('Jonathan'));


// • Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// function reverseWordOrder(string1) {
//   return string1.split(' ').reverse().join(' ');
// }

// console.log(reverseWordOrder('My cat\'s name is Luna'));


// • Write a function called calculate, which takes three arguments (two numbers and a string) called num1, num2, and operation. Include the ability to 'add', 'sub', 'mult', 'div', and 'exp' as the string argument.

// function calculate(num1, num2, string1) {
//   if (typeof string1 === 'string' && string1 === "add") {
//     return num1+num2;
//   } else if (typeof string1 === 'string' && string1 === 'sub') {
//     return num1-num2;
//   } else if (typeof string1 === 'string' && string1 === 'mult') {
//     return num1*num2;
//   } else if (typeof string1 === 'string' && string1 === 'div') {
//     return num1/num2;
//   } else if (typeof string1 === 'string' && string1 === 'exp') {
//     return num1**num2;
//   }
//   return false;
// }

// console.log(calculate(10, 2, 'add'));
// console.log(calculate(10, 2, 'sub'));
// console.log(calculate(10, 2, 'mult'));
// console.log(calculate(10, 2, 'div'));
// console.log(calculate(10, 2, 'exp'));


// • Write a function that checks if a number is 1-to-n pandigital:

// function checkifPandigital(num1) {
//   let argumentAsString = num1.toString();
//   let numberOfCharactersArray = [];
//   for (let i = 1; i < argumentAsString.length + 1; i++) {
//     numberOfCharactersArray.push(i);
//   }
//   console.log(numberOfCharactersArray);
//   for (let i = 0; i < argumentAsString.length; i++) {
//     if (numberOfCharactersArray.indexOf(Number(argumentAsString[i])) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkifPandigital(1768543));


// Write a function that, when called ("call" = "invoke") creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space (a "white square") or a # character (representing a black square). Hence, the characters should form a chessboard.

// function createGrid() {
//   let grid = '';
//   for (let i = 0; i < 8; i++) {
//     let lineString = '';
//     for (let a = 0; a < 8; a++) {
//       if (i % 2 === 0) {
//         if (a % 2 === 0) {
//           lineString += ' ';
//         } else lineString += '#';
//       } else if (a % 2 === 0) {
//         lineString += '#';
//       } else lineString += ' ';
//     }
//     grid += lineString + '\n';
//   }
//   console.log(grid);
// }

// createGrid();


// function createCustomGrid(numPreference) {
//   let grid = '';
//   for (let i = 0; i < numPreference; i++) {
//     let lineString = '';
//     for (let a = 0; a < numPreference; a++) {
//       if (i % 2 === 0) {
//         if (a % 2 === 0) {
//           lineString += ' ';
//         } else lineString += '#';
//       } else if (a % 2 === 0) {
//         lineString += '#';
//       } else lineString += ' ';
//     }
//     grid += lineString + '\n';
//   }
//   console.log(grid);
// }

// createCustomGrid(18)



// • Modify calculate above so that it continues to work as specified in question 3, but also lets a user get the square root of a number by specifying only 2 parameters: the number they want the square root of as the first parameter, and "sqrt" as the second parameter.

// function computeMathOperations(num1, num2, string1) {
//   if (string1 === 'add') {
//     return num1+num2;
//   } else if (typeof num2 === 'string' && num2 === 'sqrt') {
//     return Math.sqrt(num1)
//   }
// }

// console.log(computeMathOperations(1,2,'add'));
// console.log(computeMathOperations(81,'sqrt'));


// function updatedCalculate(num1, num2, string1) {
//   if (typeof num2 === 'string' && num2 === 'sqrt') {
//     return Math.sqrt(num1);
//   } else if (typeof string1 === 'string' && string1 === "add") {
//     return num1+num2;
//   } else if (typeof string1 === 'string' && string1 === 'sub') {
//     return num1-num2;
//   } else if (typeof string1 === 'string' && string1 === 'mult') {
//     return num1*num2;
//   } else if (typeof string1 === 'string' && string1 === 'div') {
//     return num1/num2;
//   } else if (typeof string1 === 'string' && string1 === 'exp') {
//     return num1**num2;
//   }
//   return false;
// }

// console.log(updatedCalculate(1, 5, 'add'));
// console.log(updatedCalculate(81, 'sqrt'));

// for (let i = 1; i <= 100; i++) {
//   if (Number.isInteger(updatedCalculate(i, 'sqrt'))) {
//     console.log(i + ': square root: ' + updatedCalculate(i, 'sqrt'));
//   }
// }