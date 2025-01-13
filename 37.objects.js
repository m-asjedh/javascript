//objects - A collection of related properties and/or methods.
//methods - A function associated with an object.
//          Can represent real world objects ( people,proucts,etc)
//          object = {key:value,
//                    function()}

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi, I am John Doe");
  },
  eat: () => {
    console.log("I am eating");
  },
};

const person2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  isEmployed: false,
  sayHello: () => {
    console.log("Hi, I am Jane Doe");
  },
  eat: () => {
    console.log("I am not eating");
  },
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();
