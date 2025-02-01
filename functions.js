// ANCHOR - Functions Lab & Exercises

// SECTION Function Declaration vs. Definition

// • The following function, multiply, is declared (function name in use) as well as defined (contains an expression):
// • Function declarations are hoisted, meaning they can be invoked(called) ahead of where they are declared further down in a file:

// console.log(multiply(2, 5));

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// • The following function, divideTwoNumbers, is an example of a defined function (contains an expression), but not declared.
// • A function definition is NOT hoisted, so you cannot invoke(call) the function ahead of where it is defined in the file.

// const divideTwoNumbers = (num1, num2) => {
//   return num1 / num2;
// }

// console.log(divideTwoNumbers(10, 2));


// • Write a function, printSum, that will console.log the result of 10 + 10:

// console.log(printSum());

// function printSum() {
//   return 10+10;
// }


// Write a function, printTriangle, that will print these pound signs to the console:

// function printTriangle() {
//   let hash = "#";
//   for (let i = 1; i <= 5; i++ ) {
//     console.log(hash);
//     hash += "#";
//   }
// }

// printTriangle();


// • Write a function, printParameter, that takes a paramater called "input". The function should simply console.log the value of the input parameter. Invoke the function with an argument:

// function printParameter(input) {
//   console.log(input);
// }

// printParameter('Jonathan');


// • Write a function called minusOne that takes a parameter called 'num'. Assuming the argument is a number, print the argument provided minus 1.

// function minusOne(num) {
//   if (typeof num !== 'number') {
//     return 'Provided argument is not a number';
//   } else {
//     return num - 1;
//   }
// }

// console.log(minusOne('Jonathan'));
// console.log(minusOne(2000));


// • Write a function, getLastElement, that takes a parameter called 'arr'. Invoke the function with an array as the argument. The function should print the last element within the array.

// function getLastElement(arr) {
//   if (Array.isArray(arr)) {
//     return arr[arr.length - 1];
//   } else {
//     return 'Provided argument is not a function';
//   }
// }

// let sampleArray = ['Luna', 'Jeremy', 'Jonathan'];

// console.log(getLastElement(sampleArray));
// console.log(getLastElement());


// • Write a funtion, makeSentence, that takes three parameters and interpolates them into a fully formed sentence:

// function makesSentence(arg1, arg2, arg3) {
//   return arg1 + ' ' + arg2 + ' ' + arg3 + '.';
// }

// console.log(makesSentence('Our', 'cat', 'Luna'));


// • Write a function, divideThreeNums, that takes three parameters and prints the third parameter divided by the result of the second parameter divided by the first.

// function divideThreeNums(num1, num2, num3) {
//   if (typeof num1 && typeof num2 && typeof num3 === 'number') {
//     return num3/(num2/num1);
//   } else {
//     return 'Not all provided arguments are numbers.'
//   }
// }

// console.log(divideThreeNums(2, 3, 'J'));
// console.log(divideThreeNums(2, 3, 6));


// • Write a function calculateArea that takes two parameters width and length and multiplies them. This will give us the area of a rectangle. Invoke the function a couple of times with different arguments each time:

// function calculateArea(width, length) {
//   if (typeof width && typeof length !== 'number') return 'Provided arguments are not both numbers.';
//   return width*length;
// }

// console.log(calculateArea(5, 8));
// console.log(calculateArea(5, 'Jonathan'));


// • Write a function that takes three parameters (numbers), sums them, converts the sum into a string and returns the string (eg. "123"). Use your google-fu to research converting a number into a string. Invoke the function a couple of times with different arguments each time.

// function numberSumToString(num1, num2, num3) {
//   if (typeof num1 && typeof num2 && typeof num3 === 'number') {
//     let numTotal = num1+num2+num3;
//     return numTotal.toString();
//   }
//   return "Provided arguments are not all numbers.";
// }

// console.log(numberSumToString(2, 4, 8));


// • Write a function that takes two parameters (strings) and returns true (Boolean) if the two strings are identical, false if not.

// function checkIfStringsIdentical(string1, string2) {
//   if (typeof string1 && typeof string2 === 'string' && string1 === string2) return true;
//   return false;
// }

// console.log(checkIfStringsIdentical('Jonathan', 'Jonathan'));
// console.log(checkIfStringsIdentical('Jonathan', 'jonathan'));
// console.log(checkIfStringsIdentical('Jonathan', 'Jonathan', 'Luna'));
// console.log(checkIfStringsIdentical('Jonathan'));


// • Writing a function to determine if a word is a Palindrome.

// function checkifPalindrome(word) {
//   if (typeof word === 'string') {
//     if (word === word.split('').reverse().join('')) return true;
//     return false;
//   }
//   return 'NOT a string';
// }

// console.log(checkifPalindrome('Jonathan'))


// • Look into regular expressions and the .match() method. Use .match() only to select parts of a reversed string that match a pattern.

// function checkIfPalindromeWithMatch(word) {
//   if (typeof word === 'string') {
//     if (word.toLowerCase().split('').reverse().join('').match(word.toLowerCase())) return true;
//     return false;
//   }
//   return false;
// }

// console.log(checkIfPalindromeWithMatch('Luna'));
// console.log(checkIfPalindromeWithMatch('racecar'));
// console.log(checkIfPalindromeWithMatch('Racecar'));