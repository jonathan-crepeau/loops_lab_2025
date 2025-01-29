// console.log('All good under the hood...');


// SECTION - While Loops:

// • Write a while loop that counts from 1 to 100:

// let num = 1;

// while (num <= 100) {
//   console.log(num);
//   num++
// }


// • Write a for loop that counts from 1 to 200, and for each count prints the square root of each count's number:

// let num = 1;

// while (num <= 200) {
//   console.log('The square of ' + num + ' is ' + Math.sqrt(num) + '!');
//   num++;
// }


// • Write a for loop that counts backwards from 1000 to 1;

// let num = 1000;

// while (num >= 1) {
//   console.log('The number is ' + num + '!');
//   num--;
// }


// SECTION - For Loops

// • Write a for loop that counts from 999 to 9999:

// for (let i = 999; i <= 9999; i++) {
//   console.log('The number is ' + i + '.');
//   i++
// }


// • Write a for loop that prints 'This is the song that never ends' to the console 100 times:

// for (let i = 0; i < 100; i++) {
//   console.log('This is the song that never ends(' + i + ').');
// }


// • Write a for loop that counts backwards from 1000 to 1, using i--;

// for (let i = 1000; i > 0; i--) {
//   console.log(i);
// }



// SECTION - Conditionals And Loops Exercises:

// carsArray = ["Chevy", "Audi", "Nissan", "Toyota", "Lexus"];

// for (let i = 0; i < carsArray.length; i++) {
//   console.log(carsArray[i]);
// }


// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i + ' is an even number!');
//   } else {
//     console.log(i + ' is an odd number!');
//   }
// }


// • Write a for loop that will iterate from 50 to 20. For each iteration, if the current number is a multiple of 3, console.log the value:

// for (let i = 50; i >= 20; i--) {
//   if (i % 3 === 0) {
//     console.log(i + ' is a multiple of three!');
//   }
// }


// • Loop through an array and print every other value, starting with the second value:

// const stateNames = ["Maine", "New Hampshire", "Vermont", "Massachussetts", "Rhode Island", "Connecticut"];

// for (let i = 0; i < stateNames.length; i++) {
//   if (i % 2 !== 0) {
//     console.log(stateNames[i]);
//   }
// }


// • Create a new array with the gluten-free options from this menu:

// let glutenFreeMenu = [];
// const currentMenu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];

// for (let i = 0; i < currentMenu.length; i++) {
//   if (currentMenu[i].glutenFree === true) {
//     glutenFreeMenu.push(currentMenu[i])
//   }
// }

// console.log(glutenFreeMenu);


// • Loop through the following array and push the items that are not numbers into a separate array:

// const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]

// const numbersArray = [];

// for (let i = 0; i < mixedArray.length; i++) {
//   if (typeof mixedArray[i] === 'number') {
//     numbersArray.push(mixedArray[i]);
//   }
// }

// console.log(numbersArray);


// • Create a new array with all the players that have a true value of GOAT from each league:

// const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}]

// const goatPlayers = [];

// for (let i = 0; i < league.length; i++) {
//   // console.log(league[i]);
//   for (let b = 0; b < league[i].players.length; b++) {
//     // console.log(league[i].players[b]);
//     if (league[i].players[b].goat === true) {
//       goatPlayers.push(league[i].players[b])
//     }
//   }
// }

// console.log(goatPlayers)