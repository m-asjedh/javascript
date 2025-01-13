// constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`I am driving ${this.make} ${this.model} `);
  };
}
//can be written like this too by chnaging the parameter names
// function Car(a, b, c, d) {
//   this.make = a;
//   this.model = b;
//   this.year = c;
//   this.color = d;
// }

const car1 = new Car("Toyota", "Corolla", 2020, "red");
const car2 = new Car("Honda", "Civic", 2019, "blue");
const car3 = new Car("BMW", "X5", 2021, "black");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
