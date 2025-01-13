// getters = special method that makes a property readable
// setters = spcial methods that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a postive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a postive number");
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set validation(fname) {
    if (typeof fname === "string" && fname.length > 0) {
      this._firstName = fname;
    } else {
      console.error("Check the firs name is string and length greater 0");
    }
  }
}

const newPerson = new Person("Asjedh");

console.log(newPerson.firstName);
