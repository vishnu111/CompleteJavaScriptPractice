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

/*Let's deal with sets*/
const exampleSet = new Set(['pizza', 'pizza', 'pasta', 'idly', 'dosa', 'idly']);
console.log(exampleSet);
console.log(exampleSet.size);
exampleSet.add('chicken');
exampleSet.add('idly');
console.log(exampleSet);
exampleSet.delete('idly');
console.log(exampleSet);
for (const food of exampleSet) console.log(food);
exampleSet.clear();
console.log(exampleSet);

/*An example on sets*/
const staff = ['chef', 'manager', 'waiter', 'waiter', 'chef'];
const uniqueStaffInSet = new Set(staff);
const uniqueStaffInArray = [...new Set(staff)];
console.log(uniqueStaffInSet);
console.log(uniqueStaffInArray);

/*A string can also be a set*/
console.log(new Set('vishnu'));
