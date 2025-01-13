// this - reference to the object where THIS is used.
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
  name: "John",
  favFood: "Pizza",
  sayHello: function () {
    console.log(`Hi i am ${this.name}`);
  },
  eat: function () {
    console.log(`I am eating ${this.favFood}`);
  },
};

const person2 = {
  name: "Jane",
  favFood: "Burger",
  sayHello: function () {
    console.log(`Hi i am ${this.name}`);
  },
  eat: function () {
    console.log(`I am eating ${this.favFood}`);
  },
};

person1.eat();
person2.eat();

//this keyword doesnt work with arrow functions

console.log(this); //window object
