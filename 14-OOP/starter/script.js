'use strict';
// Constructor Functions and the new Operator

//Thease are constructor functions: By convention they start with uppercase letter
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never to this! Because with each of this constructor function instance we create, we are using the below function in it also which is waste of resources
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

//A Constructor function instance is created like below
// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);
// //Once you create a new instance with "new" keyword, the below will happen
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

///////////////////////////////////////
// Prototypes: Each and every function in JS automatically have a property called prototype that includes Constructor Function:
//Every object created from certain Constructor function have access to all the methods and properties defined in constructor prototype property.
//Below is the prototype property of constructor function
//So, objects created with Person Constructor function will have access to all the methods and properties defined using "Person.prototype"
// console.log(Person.prototype);

//Here, we are defaining a method in person prototype property
// Person.prototype.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
// };

//Here, we are accessing the prototype method of Person using jonas because jonas is a object from Person
// jonas.calcAge();
// matilda.calcAge();

//With this, we can access and see prototype methods and properties for any object
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

//Here, we are defaining a property in person prototype
// Person.prototype.species = 'Homo Sapiens';
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

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

//Creating our own Array prototype, we can use this method to any array object once declared. But, this is not a good idea to add this to build-in array prototypes. Because in future MDN might add new array.prototype with same name with different functionality
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// console.dir(x => x + 1);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };
// Car.prototype.break = function () {
//   this.speed = this.speed - 10;
//   console.log(this.speed);
// };

// const bmw = new Car('BMW', 120);
// const merc = new Car('Mercedes', 95);

// bmw.break();
// bmw.accelerate();
// merc.break();
// merc.accelerate();

///////////////////////////////////////
// ES6 Classes: classes does the same as function constructors and prototypes . It is alternate to them. We can use anything of our choice.

// Class expression
// const PersonCl = class {}

// Class declaration
// class PersonCl {
//   //constructor
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to the prototype property like it does in constructor functions when we do (CONSTRUCTOR_NAME.Prototype.METHOD_NAME = function(){})
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   //getters and setters: a setter method should have excatly one property, we can either use getter or setter or both
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists: when we try to set this.fullName = fullName, this method will be called and this._fullName = fullName will be set
//   set fullName(name) {
//     //By convention is Javascript if a property exist, if we want to implicitly override that we can use same variable name with underscore at the start
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   //Here, when we try to access this.fullName from outside, this getter will be called and this._fullName will be returned
//   get fullName() {
//     return this._fullName;
//   }

//   // Static method: we can't use objects to invoke the static method, instead we should use the class name
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
//calling getter here
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);
//
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens (we can pass class to function and return class in functions)
// 3. Classes are executed in strict mode by default

// const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();

//Prototypal inheritance using Object.create
//This is a constructor function with method
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

//With the Object.create a new object is created with the prototypes of the passed object, in this case steven object is created with the prototypes of the PersonProto
// const steven = Object.create(PersonProto);
// console.log(steven);
// //We are defaining the properties of steven object, better way at @208
// steven.name = 'Steven';
// steven.birthYear = 2002;
// // steven.calcAge();

// // console.log(steven.__proto__ === PersonProto);

// const PersonProtoN = {
//   calcAges() {
//     console.log(2037 - this.birthYear);
//   },

//   //just a method to define properties
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const sarah = Object.create(PersonProtoN);
//Instead of defaining the properties manually like at @189, we are passing them to method
// sarah.init('Sarah', 1979);
// sarah.calcAges();

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };
// Car.prototype.break = function () {
//   this.speed = this.speed - 10;
//   console.log(this.speed);
// };

// const bmw = new Car('BMW', 120);
// const merc = new Car('Mercedes', 95);

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
//Inheritance using Constructor functions and Object.create
//Person Constructor function
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// //Adding prototype methods to above contructor function
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// //New Student Constructor function
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes: we are achieving inheritance here by linking prototypes, now student objects can use the prototype methods of Person function. We have to link this before adding any prototype methods to the student because this object.create might override those methods
// Student.prototype = Object.create(Person.prototype);

// //Adding new prototype method to Student Constructor function
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// //Creating an object from Student Constructor function
// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// //Calling Person prototype method from Student's object/instance which is mike because they are inherited
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
// //This Student.prototype.constructor should return student ideally, but it returns Person because of prototype linkage using Object.create. We can override that(we are doing that at line @295)
// console.dir(Student.prototype.constructor);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };
// Car.prototype.break = function () {
//   this.speed = this.speed - 10;
//   console.log(this.speed);
// };

// const EV = function (make, speed, charge) {
//   this.make = make;
//   this.speed = speed;
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (curCharge) {
//   this.charge = curCharge;
// };
// EV.prototype.accelerate = function () {
//   this.speed = this.speed + 20;
//   this.charge -= 1;
//   console.log(
//     `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };
// const tesl = new EV('tesla', 120, 23);
// tesl.accelerate();
// tesl.chargeBattery(100);
// tesl.accelerate();

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }
// //with extends keyword we are inheriting PersonCl properties and methods
// class StudentCl extends PersonCl {
//   //If we are passing only fullName and birthYear to the constructor, then we don't need this constructor here because the parent constructor accepts those two parameters
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!, super function call should be first in the constructor, it calls the parent constructor with passing arguments
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   //Overriding the parent calcAge method here
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();
///////////////////////////////////////
// Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   // BUG in video:
//   // console.log(`My name is ${this.fullName} and I study ${this.course}`);

//   // FIX:
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));
