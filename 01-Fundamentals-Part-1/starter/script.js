const bill = 275;
const tip = ((bill > 50 && bill < 300 ? 15 : 20) * bill) / 100;
console.log(
  `the bill is ${bill}, the tip is ${tip} and the total is ${bill + tip}`
);
