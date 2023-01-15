'use strict';
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);
// console.log(bookings);
///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//Function returning function
// const greetFirst = function (greetings) {
//   return function (name) {
//     console.log(`${greetings} ${name}`);
//   };
// };

// //This greetFirst function returns a new function
// const greetFirstReturnFunction = greetFirst('Good Morning');

// //Call to the new function returned by greetFirst function
// greetFirstReturnFunction('Vishnu');

// //Function returning function - With Arrow functions
// const greetSecond = greeting => names => console.log(`${greeting} ${names}`);
// greetSecond('Hello')('V');

//Create an airline object with a method in it
//Create an another airline object with no method in it(should use the method of previous object)
//introduce the call and apply methods and it's usecases to pass the this property

// const quaterAirlines = {
//   name: 'quatar',
//   code: 'QUA',
//   passengers: [],
//   passengerData(flightNumber, pName) {
//     console.log(
//       `${this.name.toUpperCase()} airlines with airlines code ${
//         this.code
//       } and flight number: ${flightNumber} is booked for ${pName}`
//     );
//     this.passengers.push({
//       flightNumber: `${this.code} and ${flightNumber}`,
//       pName,
//     });
//   },
// };
// quaterAirlines.passengerData(7, 'Vishnu');
// console.log(quaterAirlines.passengers);

// //Now, let's assure we are opening new airlines named airIndia
// const airIndia = {
//   name: 'air',
//   code: 'AIR',
//   passengers: [],
// };
// const airIndiaPassengerData = quaterAirlines.passengerData;

// //This would throw the error, since we are doing simple function call, the "this" keyword is undefined in the passengerData method. To overcome this, we have to use "call" or "apply" methods to pass the object name as an arugument with other arguments in the function call.
// // airIndiaPassengerData(8, 'V');

// //Intro of call method: the call method takes the object as first and then the other aruguments to function indidually
// airIndiaPassengerData.call(airIndia, 8, 'Vis');

// //Intro to apply method: the apply method takes the object as first and then the other aruguments to function in the array form
// const arrayPassengerData = [10, 'bha'];
// airIndiaPassengerData.apply(airIndia, arrayPassengerData);

// //Note: we can pass the array to call method also with spread operator
// airIndiaPassengerData.call(airIndia, ...arrayPassengerData);
// console.log(airIndia.passengers);

// //Define bind method
// //Define partial parameter with bind method
// //write buy new plane method into any airlines object
// //Activate buy new plane with eventListiner

// //Bind method intro: In call and apply methods, we have to pass the argument(for this reference) everytime we are calling the method. In the bind method, we can bind the object to the function once and call function any time without passing object.
// const airIndiaBind = airIndiaPassengerData.bind(airIndia);
// airIndiaBind(50, 'Bhavya');

// //Partial parameter with bind: If we want to keep the flight number same for all passengers and only take the passenger name as an argument during function call. We can do it with bind
// const airIndiaBind70Flight = airIndiaPassengerData.bind(airIndia, 70);
// airIndiaBind70Flight('Bhavya H'); //In this function call, we just have to pass the name argument since flight number is already set in airIndiaBind70Flight bind.

// //Let's add some parameters and methods to the airIndia object
// airIndia.noOfPlanes = 300;
// airIndia.buyNewPlane = function () {
//   console.log(this);
//   this.noOfPlanes++;
//   console.log(this.noOfPlanes);
// };

// //Let's invoke the above function when **Buy new plane** button is clicked: the below one does not work because the callback function(airIndia.buyNewPlane) takes the this keyword from document.querySelector('.buy') and thus some statements with this in function(airIndia.buyNewPlane) throws NaN. To overcome this error, we have to use bind method in the callback function call
// document.querySelector('.buy').addEventListener('click', airIndia.buyNewPlane);

// //FIx for above
// document
//   .querySelector('.buy')
//   .addEventListener('click', airIndia.buyNewPlane.bind(airIndia));

// /****Partial application using bind****/
// const totalBill = function (tip, bill) {
//   return bill + (bill * tip) / 100;
// };
// console.log(totalBill(10, 100));

// //Let's say the tip is fixed to 20%, we just have to pass the bill value. Then we use the bind method to achive that
// const bindTip20 = totalBill.bind(null, 20); //Here, we need not pass the first argument with this argument. Since, we are not using this in the function. We should simple pay "null" as argument
// console.log(bindTip20(100));

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let inputOption = window.prompt(
//       'What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)'
//     );
//     if (Number(inputOption) > 3) {
//       window.alert('wrong input type');
//     } else {
//       this.answers[Number(inputOption)]++;
//       this.displayResults('array');
//       this.displayResults('string');
//     }
//   },
//   displayResults(type = 'array') {
//     if (type == 'array') console.log(this.answers);
//     if (type == 'string')
//       console.log(
//         `The poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]} `
//       );
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.registerNewAnswer();

//Immediatly invoked function expression
// (function () {
//   console.log(`This functions executes only one time`);
// })();

// //In arrow functions formate
// (() => console.log(`This arrow function also executes only one time`))();

//Closures

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// console.dir(f);

// Re-assigning f function
h();
f();
// console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
