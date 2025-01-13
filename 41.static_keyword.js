// static = is a keyword defines properties or methods belong to a class itlseft rather than creating new ob jects to access them

// // ex. class MathUtil {
//   static PI = 3.14
// }

// // const util1 = new MathUtil()
// console.log(util1.PI)

// so no need to create an object look the below example

// class MathUtil {
//   static PI = 3.14;

//   static getArea(radius) {
//     return 2 * this.PI * radius;
//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getArea(2));

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`The user count is ${User.userCount} lessssssgoo`);
  }

  sayHello() {
    console.log(`Hello my username is ${this.username}`);
  }
}

const user1 = new User("Asjedh");
const user2 = new User("Fariha");

console.log(user1.username);
console.log(user2.username);

user1.sayHello();

User.getUserCount();
