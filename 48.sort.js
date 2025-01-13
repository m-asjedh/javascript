// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic  = ( alphbet + numbers + symbols ) as strings

let fruits = ["apple", "orange", "banana", "cocnut", "pineapple"];
fruits.sort();
console.log(fruits); //['apple', 'banana', 'cocnut', 'orange', 'pineapple']

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort();
console.log(numbers); //[1, 10, 2, 3, 4, 5, 6, 7, 8, 9] look 1 then 10 after 10 all numbers are sorted

let numbers2 = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const people = [
  { name: "Asjedh", age: 23, gpa: 3.5 },
  { name: "Ravindu", age: 25, gpa: 3.6 },
  { name: "Ahmed", age: 22, gpa: 3.7 },
  { name: "Ashfaq", age: 24, gpa: 3.4 },
];
people.sort((a, b) => a.age - b.age);
console.log(people);
// 0: {name: 'Ahmed', age: 22, gpa: 3.7}
// 1: {name: 'Asjedh', age: 23, gpa: 3.5}
// 2: {name: 'Ashfaq', age: 24, gpa: 3.4}
// 3: {name: 'Ravindu', age: 25, gpa: 3.6}

const people2 = [
  { name: "Asjedh", age: 23, gpa: 3.5 },
  { name: "Ravindu", age: 25, gpa: 3.6 },
  { name: "Ahmed", age: 22, gpa: 3.7 },
  { name: "Ashfaq", age: 24, gpa: 3.4 },
];
people2.sort((a, b) => a.name.localeCompare(b.name)); // localCompar() this method will examine two strings for lexicographic order
console.log(people2);
// 0: {name: 'Ahmed', age: 22, gpa: 3.7}
// 1: {name: 'Ashfaq', age: 24, gpa: 3.4}
// 2: {name: 'Asjedh', age: 23, gpa: 3.5}
// 3: {name: 'Ravindu', age: 25, gpa: 3.6}
