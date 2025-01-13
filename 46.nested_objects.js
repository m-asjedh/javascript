// nested objects= objects inisde of other objects.
// Allows you to represent more complex data strucutures
// child object is enclosed by a parent object

// Person{Address{}, ContactInfo{}}
// ShoppingCart{KeyboardEvent{},Mouse{},Monitor{}}

// the dot (.) used in to access the objects properties is called property accessor

const person = {
  fullName: "Mohamed Asjedh",
  age: 23,
  isStudent: false,
  hobbies: ["gaming", "travelling"],
  address: {
    street: "9/3 kandy Rd, kengalla",
    city: "Kandy",
    country: "Sri lanka",
  },
};

console.log(person.fullName); //Mohamed Asjedh
console.log(person.age); //23
console.log(person.isStudent); // false
console.log(person.hobbies); //  ['gaming', 'travelling']
console.log(person.hobbies[1]); //  travelling
console.log(person.address); // {street: '9/3 kandy Rd, kengalla', city: 'Kandy', country: 'Sri lanka'}
console.log(person.address.street); // 9/3 kandy Rd, kengalla

for (const property in person.address) {
  console.log(person.address[property]);
}
//  9/3 kandy Rd, kengalla
//  Kandy
//  Sri Lanka

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Asjedh",
  23,
  "3/9 Kandy Road",
  " Kenaglla",
  "sri Lanka"
);

const person2 = new Person(
  "Fauzer",
  63,
  "47 Mahiyanganaya Road,",
  "Hunnasgiriya",
  "sri Lanka"
);

const person3 = new Person(
  "Inam",
  28,
  "3/10 Kandy Road",
  " Kenaglla",
  "sri Lanka"
);

console.log(person1.name); // Asjedh
console.log(person1.age); //23
console.log(person1.address); // {street: '3/9 Kandy Road', city: ' Kenaglla', country: 'sri Lanka'}
console.log(person1.address.city); // Kenaglla
