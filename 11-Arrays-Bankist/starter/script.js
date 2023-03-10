'use strict';

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// //1
// //To add recommended food
// dogs.map(obj => {
//   obj.recommendedFood = Math.trunc(obj.weight ** 0.75 * 28);
// });
// console.log(dogs);
// //to find sarah's dogs food habit

// //2
// const sarahD = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(sarahD);
// if (sarahD.curFood > sarahD.recommendedFood) console.log('FAt');
// else console.log('Not Fat');

// //3
// //owners whose dog eat too much or too little
// const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
//   (arr, curr) => {
//     curr.curFood > curr.recommendedFood
//       ? arr.ownersEatTooMuch.push(...curr.owners)
//       : arr.ownersEatTooLittle.push(...curr.owners);
//     return arr;
//   },
//   { ownersEatTooMuch: [], ownersEatTooLittle: [] }
// );
// console.log(ownersEatTooMuch, ownersEatTooLittle);

// //4
// const y = function (ownersEatToo, s) {
//   return ownersEatToo.reduce((str, much, i, x) => {
//     str = str + much + (x.length - 1 === i ? s : ' and ');
//     return str;
//   }, '');
// };
// console.log(y(ownersEatTooMuch, "'s dogs eat too much!"));
// console.log(y(ownersEatTooLittle, "'s dogs eat too little!"));
// console.log(dogs);

// //5
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// //6
// console.log(
//   dogs.some(
//     dog =>
//       dog.curFood > dog.recommendedFood * 0.9 &&
//       dog.curFood < dog.recommendedFood * 1.1
//   )
// );

// //7
// const okayFood = dogs.filter(
//   dog =>
//     dog.curFood > dog.recommendedFood * 0.9 &&
//     dog.curFood < dog.recommendedFood * 1.1
// );
// console.log(okayFood);

// //8
// const dogsCopy = [...dogs];
// console.log(dogsCopy);
// dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogsCopy);

/////////////////////////////////////////////////
// Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE - This DOES NOT change the original array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); //shallow copy of array
// console.log([...arr]); //Same as above - shallow copy of array

// // SPLICE - This DOES change the original array
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2); //The first arugument indications position in array and second argument indicates how many elements we have to delete from the position
// console.log(arr);

// // REVERSE - This DOES change the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN - This DOES NOT change the original array
// console.log(letters.join(' - '));

// // AT Method
// const arrAT = [23, 11, 64];
// console.log(arrAT[0]);
// console.log(arrAT.at(0));
// //AT Method - getting last array element
// console.log(arrAT[arrAT.length - 1]); //Old way of last getting element
// console.log(arrAT.slice(-1)[0]); //Old way of getting last element
// console.log(arrAT.at(-1));
// //AT Method - works on strings as well
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// //FOR EACH
// const movements = [200, 450, -400, 3000, -650];
// //Usual looping technique
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('---- FOREACH ----');
// //Foreach looping technique
// //NOTE: we can't use continue; and break; in foreach
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// //FOREACH - on Maps and Sets
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

/*Challange
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]*/
// const dogsJulia1 = [3, 5, 2, 12, 7];
// const dogsKate1 = [4, 1, 15, 8, 3];
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];
// const checkDogs = function (dogsJuliaD, dogsKateD) {
//   const dogsJuliaCorrected = [...dogsJuliaD];
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2, 2);
//   const mergedData = [...dogsJuliaCorrected, ...dogsKateD];
//   console.log(mergedData);
//   mergedData.forEach(function (value, i) {
//     console.log(
//       `Dog number ${i + 1} is ${value > 2 ? 'an adult' : 'still a puppy'}`
//     );
//   });
// };
// // checkDogs(dogsJulia1, dogsKate1);
// // checkDogs(dogsJulia2, dogsKate2);
// const arrForAvg = [5, 2, 4, 1, 15, 3];
// const calcAverageHumanAge = function (ages) {
//   const resultAvg = ages
//     .map(value => (value <= 2 ? 2 * value : 16 + value * 4))
//     .filter(val => val >= 18)
//     .reduce((acc, val, i, ar) => {
//       if (i == ar.length - 1) return (acc + val) / ar.length;
//       return acc + val;
//     });
//   console.log(resultAvg);
// };
// calcAverageHumanAge(arrForAvg);

/*Maps- example*/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// //Usual old way
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// // The map Method
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// //Map method - with arrow
// const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSDArrow);
// //movements-description with map arrow
// const movementsDescription = movements.map(
//   (value, i) =>
//     `Movement: ${i + 1} : you have ${
//       value > 0 ? 'deposited' : 'withdrawal'
//     } ${Math.abs(value)}`
// );
// console.log(movementsDescription);

/*Filter and reduce array*/
//To create deposits and withdrawals array with filter methods from movements array
// const movementsD = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //with usual function
// const deposits = movementsD.filter(function (value) {
//   return value > 0;
// });
// console.log(deposits);
// //with arrows function
// const withdrawals = movementsD.filter(value => value < 0);
// console.log(withdrawals);

// //To get the total balance from movements array by adding and substracting it's elements: we use reduce method for this
// //Unlike map and filter methods where first passing arguments is the value, here in reduce the first passing argument is accumulator which is the sum of all previous elements iterated. the default initialized value for accumulator is 0, or we can specify any other value also
// const balance = movementsD.reduce(function (accumulator, value, index, array) {
//   return accumulator + value;
// }, 0);
// console.log(balance);

// //same with arrow function
// const balanceArrow = movementsD.reduce((acc, val) => acc + val, 0);
// console.log(balanceArrow);

// //to find max value from the movements array
// const maxValue = movementsD.reduce((acc, value) => (value > acc ? value : acc));
// console.log(maxValue);

//The find method:
//The find method is similar to filter method. But, it returns the first element that satisfies the condition unlike filter method where it returns all the elements that satisfies that condition in an array
// const firstWithdrawal = movements.find(val => val < 0);
// console.log(firstWithdrawal);
// //to find the account with owner name sarah smith
// const sarahAccount = accounts.find(ac => ac.owner === 'Sarah Smith');
// console.log(sarahAccount);
// EQUALITY
// console.log(movements.includes(-130));
// same as above
// console.log(movements.some(mov => mov === -130));

//If we want to find out, if any element satisfies particular condition in a generic way, then we should use some method: In this case, we wanted to find out if there are any deposits (+ve values)
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// //flat and flatMap method: they are used to combine nested arrays into single array
// const nestedArr = [
//   [1, 2],
//   [4, 5],
//   [6, 7],
//   [8, 9],
// ];
// console.log(nestedArr.flat()); //This default flat method only goes one level deeper, if we want to go into more deeper nested array we should should specify that by passing to flat function
// const deepNestArray = [[1, [2, 3]], [4, 5], [6, [7, 8]], [9]];
// console.log(deepNestArray.flat());
// console.log(deepNestArray.flat(2));
// //let's add the movements of all objects using flat
// console.log(
//   accounts
//     .map(val => val.movements)
//     .flat()
//     .reduce((acc, val) => acc + val)
// );
// //Instead of using map and flat functions seperatly like above example, we have a function called flatMap(): Only one draw back is that it can go only one level deeper
// console.log(
//   accounts.flatMap(val => val.movements).reduce((acc, val) => acc + val)
// );

// //Every method: if all the elements in the array satifies the specified condition then it returns true, else returns false
// // console.log(movements.every(val => typeof val === 'number'));
// const movementsAscNum = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsDscNum = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsAscNumSpc = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsDscNumSpc = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ///////////////////////////////////////
// // Sorting Arrays

// // Strings: these sort methods are mutatable, they change at the original array
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);
// // Numbers: This default sort method only works on strings, here if you see below we are applying sort for numbers and sort method is converting it to strings and then sorting
// console.log(movements.sort());

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)
// // Ascending: usual way to sort the array
// movementsAscNum.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movementsAscNum);

// //Easiest way to sort the array as a-b returns what needed as above
// movementsAscNumSpc.sort((a, b) => a - b);
// console.log(movementsAscNumSpc);

// // Descending
// movementsDscNum.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// console.log(movementsDscNum);
// movementsDscNumSpc.sort((a, b) => b - a);
// console.log(movementsDscNumSpc);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

///////////////////////////////////////
// More Ways of Creating and Filling Arrays
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// // Empty arrays + fill method
// //With the below statement, it won't create a array with value 7 in it. But, it creates an array with length of 7
// const x = new Array(7);
// console.log(x);
// //In below statement: the first argument is value and second is starting index and last argument is end index to fill the value
// x.fill(1, 3, 5);
// console.log(x);
// x.fill(1);
// console.log(x);
// //we can use the fill method to change the existing values also
// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from: this method is used to fill the mutiple indexes in the array
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// //we pass "_" as an argument when we don't want to use that inside the function
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// labelBalance.addEventListener('click', function () {
//   //Here we are using from method to convert the values we retrieved from html DOM, so that we can perform array methods in it.
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   //Here we are converting the DOM retrived data to array using spread operator
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// const bankDepositSum = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .filter(el => el > 0)
//   .reduce((sum, cur) => sum + cur);
// console.log(bankDepositSum);
// const numDeposits1000 = accounts
//   .flatMap(account => account.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000);
// const { deposit, withdrawal } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (count, cur) => {
//       cur > 0 ? (count.deposit += cur) : (count.withdrawal -= cur);
//       return count;
//     },
//     { deposit: 0, withdrawal: 0 }
//   );
// console.log(deposit, withdrawal);
// //A function that accepts a string and convert that to the title case
// const titleCase = function (title) {
//   const titleWords = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const splitWord = title
//     .toLowerCase()
//     .split(' ')
//     .reduce((sum, cur) => {
//       titleWords.includes(cur)
//         ? (sum += cur + ' ')
//         : (sum += cur.replace(cur[0], cur[0].toUpperCase()) + ' ');
//       return sum;
//     }, '');
//   console.log(splitWord);
// };
// console.log(titleCase('This is the title'));
// Internationalizing Numbers (Intl)
// const num = 3884764.23;

// //There many types of options like currency
// const options = {
//   style: 'currency',
//   currency: 'EUR',
//   // useGrouping: false, (used to remove the number seperators like "," or ".")
// };

// console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );
///////////////////////////////////////
// // Timers

// // setTimeout
// const ingredients = ['olives', 'spinach'];
// const pizzaTimerRun = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
//   3000,
//   ...ingredients
// );
// console.log('This wont stop for above timeout function to complete');

// const pizzaTimerStop = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
//   3000,
//   ...ingredients
// );
// if (ingredients.includes('spinach')) clearTimeout(pizzaTimerStop);

// // setInterval
// // setInterval(function () {
// //   const now = new Date();
// //   console.log(now);
// // }, 1000);

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-GB', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US', // de-DE
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const formatDate = function (movDate, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const noOfDays = calcDaysPassed(movDate, new Date());
  if (noOfDays === 0) {
    return 'Today';
  } else if (noOfDays === 1) {
    return 'Yesterday';
  } else if (noOfDays <= 7) {
    return '${noOfDays} days ago';
  } else {
    const dateOptions = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat(locale, dateOptions).format(movDate);
  }
};

let currentAccount, timer;

//Formating the currencies
const formatCurrency = function (value) {
  return new Intl.NumberFormat(currentAccount.locale, {
    style: 'currency',
    currency: currentAccount.currency,
  }).format(value);
};
//create a displayMovements function passing account-1 as an argument
//dispalay that to movements element in html
//hide the old transactions, that are already there
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movSort = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movSort.forEach(function (value, i) {
    let type = value > 0 ? 'deposit' : 'withdrawal';
    const movDate = new Date(acc.movementsDates[i]);
    const displayDate = formatDate(movDate, currentAccount.locale);

    let html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formatCurrency(value)}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//create user name with first letter from each word in name
//read owner name from all accounts
//write username to thier respective accounts
const createUsernames = function (acc) {
  acc.forEach(function (val) {
    val.username = val.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${formatCurrency(acc.balance.toFixed(2))}`;
};

const calcDisplaySummery = function (accTrans) {
  const incomes = accTrans.movements
    .filter(val => val > 0)
    .reduce((acc, val) => acc + val);
  const expenses = accTrans.movements
    .filter(val => val < 0)
    .reduce((acc, val) => acc + val);
  const intrest = accTrans.movements
    .filter(val => val > 0)
    .map(val => (val * accTrans.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);
  labelSumIn.textContent = `${formatCurrency(incomes.toFixed(2))}`;
  labelSumOut.textContent = `${formatCurrency(Math.abs(expenses).toFixed(2))}`;
  labelSumInterest.textContent = `${formatCurrency(intrest.toFixed(2))}`;
};
const updateUI = function (acc) {
  calcDisplaySummery(acc);
  calcDisplayBalance(acc);
  displayMovements(acc);
};

//Logout timer
const startLogOutTimer = function () {
  const logOutInternal = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;
    if (time == 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }
    time--;
  };
  let time = 30;
  logOutInternal();
  timer = setInterval(logOutInternal, 1000);
};

//Login functionality implementation
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    val => val.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;

    //localizations of dates
    const locDate = new Date();
    const dateOptions = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      dateOptions
    ).format(locDate);

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //check to clear the timer when user logs in
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
  }
});

//Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    value => value.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    currentAccount.username !== receiverAccount.username
  ) {
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movements.push(amount);
    receiverAccount.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

//Delete account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername = inputClosePin = '';
});

//request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(val => val >= loanAmount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(loanAmount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);

      //Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

//sort the transactions :
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, true);
  sorted = !sorted;
});
