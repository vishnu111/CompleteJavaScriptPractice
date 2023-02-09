'use strict';
// Constructor Functions and the new Operator

//Thease are constructor functions: By convention they start with uppercase letter
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this! Because with each of this constructor function instance we create, we are using the below function in it also which is waste of resources
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

//A Constructor function instance is created like below
const jonas = new Person('Jonas', 1991);
// console.log(jonas);
//Once you create a new instance with "new" keyword, the below will happen
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

///////////////////////////////////////
// Prototypes: Each and every function in JS automatically have a property called prototype that includes Constructor Function:
//Every object created from certain Constructor function have access to all the methods and properties defined in constructor prototype property.
//Below is the prototype property of constructor function
//So, objects created with Person Constructor function will have access to all the methods and properties defined using "Person.prototype"
console.log(Person.prototype);

//Here, we are defaining a method in person prototype property
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//Here, we are accessing the prototype method of Person using jonas because jonas is a object from Person
jonas.calcAge();
matilda.calcAge();

//With this, we can access and see prototype methods and properties for any object
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

//Here, we are defaining a property in person prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

//Checking if the firstName is it's own property or the prototype property of jonas
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
