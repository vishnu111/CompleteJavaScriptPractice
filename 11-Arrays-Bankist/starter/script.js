'use strict';
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
//   //console.log(dogsJuliaCorrected);
//   const mergedData = [...dogsJuliaCorrected, ...dogsKateD];
//   console.log(mergedData);
//   mergedData.forEach(function (value, i) {
//     console.log(
//       `Dog number ${i + 1} is ${value > 2 ? 'an adult' : 'still a puppy'}`
//     );
//   });
// };
// checkDogs(dogsJulia1, dogsKate1);
// checkDogs(dogsJulia2, dogsKate2);

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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//create a displayMovements function passing account-1 as an argument
//dispalay that to movements element in html
//hide the old transactions, that are already there
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (value, i) {
    let type = value > 0 ? 'deposit' : 'withdrawal';
    let html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${value}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

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

//To create deposits and withdrawals array with filter methods from movements array
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//with usual function
const deposits = movements.filter(function (value) {
  return value > 0;
});
console.log(deposits);
//with arrows function
const withdrawals = movements.filter(value => value < 0);
console.log(withdrawals);

//To get the total balance from movements array by adding and substracting it's elements: we use reduce method for this
//Unlike map and filter methods where first passing arguments is the value, here in reduce the first passing argument is accumulator which is the sum of all previous elements iterated. the default initialized value for accumulator is 0, or we can specify any other value also
const balance = movements.reduce(function (accumulator, value, index, array) {
  return accumulator + value;
}, 0);
console.log(balance);
