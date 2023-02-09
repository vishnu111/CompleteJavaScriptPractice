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
// console.log(Person.prototype);

//Here, we are defaining a method in person prototype property
Person.prototype.calcAge = function () {
  //   console.log(2037 - this.birthYear);
};

//Here, we are accessing the prototype method of Person using jonas because jonas is a object from Person
jonas.calcAge();
matilda.calcAge();

//With this, we can access and see prototype methods and properties for any object
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

//Here, we are defaining a property in person prototype
Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

//Checking if the firstName is it's own property or the prototype property of jonas
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

//Creating our own Array prototype, we can use this method to any array object once declared. But, this is not a good idea to add this to build-in array prototypes. Because in future MDN might add new array.prototype with same name with different functionality
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

// console.dir(x => x + 1);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};
Car.prototype.break = function () {
  this.speed = this.speed - 10;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);

// bmw.break();
// bmw.accelerate();
// merc.break();
// merc.accelerate();

///////////////////////////////////////
// ES6 Classes: classes does the same as function constructors and prototypes . It is alternate to them. We can use anything of our choice.

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  //getters and setters: a setter method should have excatly one property, we can only use getter or setter or both
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
//calling getter here
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens (we can pass class to function and return class in functions)
// 3. Classes are executed in strict mode by default

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();
