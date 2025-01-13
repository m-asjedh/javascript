// super = keyword is used in classes to call the construcutor or access the properties or methods of a pearent(superclass)
//         this = this object
//         super  = the parent
//         as you can seee the name,age are used in all the three child class so without using in each like that can write a
//         construcutor in the parent class and then use the super keyword to acces them in child class .
//         Therefore this minmize the code reusabilty

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`The ${this.name} can run`);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  run() {
    console.log(`The ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

class Hawk extends Animal {
  constructor(name, age, FlySpeed) {
    super(name, age);
    this.FlySpeed = FlySpeed;
  }
  run() {
    console.log(`The ${this.name} can fly`);
    super.move(this.FlySpeed);
  }
}

const rabbit = new Rabbit("Rabbit1", 10, 25);
const fish = new Fish("Fish1", 2, 12);
const hawk = new Hawk("Hawk1", 3, 59);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

rabbit.run();
fish.run();
hawk.run();
