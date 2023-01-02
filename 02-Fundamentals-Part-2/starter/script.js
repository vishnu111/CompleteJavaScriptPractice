"use strict";
/* 
create two objects for mark and john
*/
/*
const markInfo = {
  fullName: "Mark Smith",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  },
};
const johnInfo = {
  fullName: "John Miller",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  },
};
markInfo.calcBMI() > johnInfo.calcBMI()
  ? console.log(
      `${markInfo.fullName}'s BMI (${markInfo.BMI}) is higher than ${johnInfo.fullName}'s BMI (${johnInfo.BMI})`
    )
  : console.log(
      `${johnInfo.fullName}'s BMI (${johnInfo.BMI}) is higher than ${markInfo.fullName}'s BMI (${markInfo.BMI})`
    );
*/
const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = new Array();
const totals = new Array();
function calcTip(bill) {
  return ((bill >= 40 && bill <= 400 ? 15 : 20) * bill) / 100;
}
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}
function calcAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total / arr.length;
}
console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(tips));
