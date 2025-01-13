// inheritance  = allows a new class to inherit it properties and methods from an exisintg class (parent -> child)
//                which helps with code reusabiity
//                the reason is becuase no need to write each property and method in the all the class by wriintg them in parent class and
//                children class exends it so that even the children class access them (DRY principle - dont repeat yourself)

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log("the Rabbit is running");
  }
}

class Fish extends Animal {
  name = "Fish";
}

class Hawk extends Animal {
  name = "Hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
// fish.run();  Uncaught TypeError: fish.run is not a function
