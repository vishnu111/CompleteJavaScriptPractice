// 'use strict';
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   pastaIngredients: function (primaryIngredients, ...secondaryIngredients) {
//     console.log(primaryIngredients);
//     console.log(secondaryIngredients);
//   },
// };
// /*Logical Operators
//   -> use any data type
//   -> return any data type
//   -> does short-circuiting */

// /*The OR operator executes until it finds the truthy value, once it found the truthy value, it short-circuits the reamining expression*/
// console.log('------The OR(||) operator-----');
// console.log(3 || 'John');
// console.log('' || 'John');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// /*The AND operator executes untill it finds the falsy value, once it found the falsy value, it short-circuits the remanining expression*/
// console.log('------The AND(&&) operator-----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// /*Practical example for (&&)
//     Example:1
//    ->if (restaurant.orderPizza){
//     }

//    Example:2
//    ->restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//    Both, example - 1 & 2 gives the same result.

// */
const rest1 = {
  name: 'Casa De',
  noOfGuests: 10,
};
const rest2 = {
  name: 'Treebo',
  ownerName: 'Vis',
};

rest1.ownerName = rest1.ownerName && 'Vishnu';
//(or
// rest1.ownerName &&= 'Vishn';

rest2.ownerName = rest2.ownerName && 'Vis';
//(or)
// rest2.ownerName &&= 'Vi';
console.log(rest1);
console.log(rest2);
