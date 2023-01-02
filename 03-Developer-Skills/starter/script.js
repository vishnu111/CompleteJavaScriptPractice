// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const arr = [17, 21, 23];
function printForecast(arr) {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output = output + `... ${arr[i]} C in ${i + 1} days`;
  }
  output = output + " ...";
  return output;
}
console.log(printForecast(arr));
