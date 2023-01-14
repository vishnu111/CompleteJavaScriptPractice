'use strict';

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// //2
// const [gk1, ...fieldPlayers1] = players1;
// console.log(gk1);
// console.log(fieldPlayers1);
// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk2);
// console.log(fieldPlayers2);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6
// function printGoals(...players) {
//   console.log(players.length);
//   for (let i = 0; i < players.length; i++) {
//     let goals = 0;
//     for (let j = 0; j < game.scored.length; j++) {
//       if (players[i] === game.scored[j]) goals++;
//     }
//     console.log(`${players[i]} scored ${goals} goal/s`);
//   }
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// //7
// console.log((team1 > team2 ? 'team-1' : ' team2 ') + 'is gonna win');
/*Looping Arrays: the for-of loop*/
// const alpha = ['a', 'b', 'c', 'd', 'e'];
// for (const items of alpha) console.log(items);

// //entries() creats a nested array with each array consist of index number and the element
// for (const items of alpha.entries()) console.log(items);

// for (const items of alpha.entries())
//   console.log(`The index of ${items[1]} is ${items[0]}`);

// for (const [index, element] of alpha.entries()) //Here we are destructuring items array to [index, element]
//   console.log(`*** ${index} is the index of element ${element}`);

//Looping Objects: Object Keys, Values, and Entries
// const restaurant = {
//   openingHours: {
//     mon: {
//       open: 9,
//       close: 10,
//     },
//     tue: {
//       open: 10,
//       close: 8,
//     },
//     fri: {
//       open: 0,
//       close: 10,
//     },
//   },
// };

// //To loop over the keys/properties of the object
// const keys = Object.keys(restaurant.openingHours);
// for (const key of keys) console.log(key);

// //To loop over the values of the object
// const values = Object.values(restaurant.openingHours);
// for (const value of values) console.log(value);

// //To loop over the whole object/entries
// const wholeObjects = Object.entries(restaurant.openingHours);
// for (const wholeObject of wholeObjects) console.log(wholeObject);

// //Example
// for (const [keys, { open, close }] of wholeObjects)
//   console.log(
//     `On ${keys} our restaurant opens at ${open} and closes at ${close}`
//   );

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// const goalScored = Object.entries(game.scored);
// for (let [index, name] of goalScored)
//   console.log(`Goal ${Number(index) + 1}: ${name}`);

// //2
// const oddsList = Object.values(game.odds);
// let x = 0;
// for (let oddList of oddsList) x += Number(oddList);
// console.log(Math.trunc(x / 3));

// //3
// const oddGeneric = Object.entries(game.odds);
// for (let [key, value] of oddGeneric) {
//   let sub = game[key] ? 'victory' : 'draw';
//   let name = game[key] ?? '';
//   console.log(`Odd of ${sub} ${name} : ${value}`);
// }

// //4
// const scorers = {};
// const goalPlayer = Object.values(game.scored);
// for (let goalP of goalPlayer) {
//   let x = scorers[goalP] || 0;
//   scorers[goalP] = 1 + x;
// }
// console.log(scorers);

// /*Let's deal with sets*/
// const exampleSet = new Set(['pizza', 'pizza', 'pasta', 'idly', 'dosa', 'idly']);
// console.log(exampleSet);
// console.log(exampleSet.size);
// exampleSet.add('chicken');
// exampleSet.add('idly');
// console.log(exampleSet);
// exampleSet.delete('idly');
// console.log(exampleSet);
// for (const food of exampleSet) console.log(food);
// exampleSet.clear();
// console.log(exampleSet);

// /*An example on sets*/
// const staff = ['chef', 'manager', 'waiter', 'waiter', 'chef'];
// const uniqueStaffInSet = new Set(staff);
// const uniqueStaffInArray = [...new Set(staff)];
// console.log(uniqueStaffInSet);
// console.log(uniqueStaffInArray);

// /*A string can also be a set*/
// console.log(new Set('vishnu'));
//

//To add the key:value pair to maps when creating it without using the set method
// const quizTime = new Map([
//   ['question', 'What is the best programming language'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Your answer is correct'],
//   [false, 'Your answer is false'],
// ]);
// console.log(quizTime);

// console.log(quizTime.get('question'));
// for (const [key, value] of quizTime) {
//   if (typeof key === 'number') {
//     console.log(`Option ${key} : ${value}`);
//   }
// }

// //This will prompt a box in the browser for user input
// const userAnswer = Number(prompt('Plese give your option'));

// console.log(quizTime.get(userAnswer === quizTime.get('correct')));

// /*--------------XXXXXXXX------------------*/
// //To convert Object to Maps
// const openingHoursObject = {
//   mon: {
//     open: 9,
//     close: 10,
//   },
//   tue: {
//     open: 10,
//   },
//   wed: {
//     close: 11,
//   },
// };
// console.log(Object.entries(openingHoursObject));
// const openingHoursSet = new Map(Object.entries(openingHoursObject));
// console.log(openingHoursSet);
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);

// for (let [key, value] of gameEvents) {
//   console.log(`${key > 45 ? '[LAST HALF]' : '[FIRST HALF]'} ${key}: ${value}`);
// }
///////////////////////////////////////
// Working With Strings - Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
//   else console.log('You got lucky 😎');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// //Behind the scenes, when you call on method on strings, JavaScript converts that sting name to object with the process called boxing. It happens like shown in the below line.
// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// //Eventhough the string calls the method after it converts itself to object, it only returns the primitives and not object types as shown in below line
// console.log(typeof new String('jonas').slice(1));
///////////////////////////////////////
// Working With Strings - Part 2

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// //console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
///////////////////////////////////////
// Working With Strings - Part 2

// Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));

// // Repeat
// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const inputText = document.querySelector('textarea').value.split(/\r?\n/);
//   for (let text of inputText) {
//     if (text.includes('_')) {
//       let [first, second] = text.trim().split('_');
//       let out =
//         first.toLowerCase() +
//         second[0].toUpperCase() +
//         second.slice(1).toLowerCase();
//       console.log(out);
//       console.log(`${out.padEnd(30, ' ')}${'$'}`);
//     } else {
//       console.log(`${text} does not contain _`);
//     }
//   }
// });

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)
// const allFlights = flights.split('+');
// for (let eachFlight of allFlights) {
//   let [about, from, to, time] = eachFlight.split(';');
//   let aboutFlight = about.slice(1);
//   let flightOut;
//   if (aboutFlight.includes('_')) {
//     flightOut = 'NOOO' + aboutFlight.replace('_', ' ');
//   } else {
//     flightOut = aboutFlight;
//   }
//   console.log(
//     `${flightOut} from ${from.slice(0, 3).toUpperCase()} to ${to
//       .slice(0, 3)
//       .toUpperCase()} (${time.replace(':', 'h')})`
//   );
// }
