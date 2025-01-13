// destructuirng = extract values from arrays and objects
//                 then assing them to varaibles in a convinient way
//                 [] = to perform aaray destructuring
//                 {} = to perfrom objct destructuring

// ------ EXAMPLE 1 -------
// Swap  the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

// ------ EXAMPLE 2-------
// Swap  2 elemetns in an array

const colors1 = ["red", "green", "blue", "black", "white"];

[colors1[0], colors1[4]] = [colors1[4], colors1[0]];

console.log(colors1);

// ------ EXAMPLE 3-------
// Assign aray elemnts to variables

const colors2 = ["red", "green", "blue", "black", "white"];

const [firstcolor, secondcolor, thirdcolor, ...extraColors] = colors2;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extraColors);

// ------ EXAMPLE 4-------
// Extact values from objects

const person1 = {
  firstName: "Fauzer",
  lastName: "Asjedh",
  age: 23,
  job: "SE",
};

const person2 = {
  firstName2: "Fauzer",
  lastName2: "Inam",
  age2: 30,
};

const { firstName, lastName, age, job } = person1;
const { firstName2, lastName2, age2, job2 = "SSE" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

console.log(firstName2);
console.log(lastName2);
console.log(age2);
console.log(job2);

// ------ EXAMPLE 5-------
// Destructure in function parameters

function displayPerson({ brand, model, yom, yor = "not known" }) {
  console.log(`name: ${brand}  ${model}`);
  console.log(`name: ${yom}  ${yor}`);
}

const car1 = {
  brand: "toyota",
  model: "premio",
  yom: 2014,
  yor: 2015,
};

const car2 = {
  brand: "honda",
  model: "pcx",
  yom: 2012,
};

displayPerson(car1);
displayPerson(car2);
