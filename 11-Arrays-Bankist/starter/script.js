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
  labelBalance.textContent = `${acc.balance}€`;
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
  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(expenses)}€`;
  labelSumInterest.textContent = `${intrest}€`;
};
const updateUI = function (acc) {
  calcDisplaySummery(acc);
  calcDisplayBalance(acc);
  displayMovements(acc.movements);
};
let currentAccount;
//Login functionality implementation
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    val => val.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
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
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
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
  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(val => val >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
