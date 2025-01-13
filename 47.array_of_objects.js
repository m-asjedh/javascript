const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "grapes", color: "purple", calories: 50 },
  { name: "banana", color: "yellow", calories: 35 },
  { name: "coconut", color: "brown", calories: 70 },
];

console.log(fruits[0].name); //apple

fruits.push({ name: "pineapple", color: "yellow", calories: 159 }); //to add the new objects into the array
fruits.pop(); // remove the last object in the array
fruits.splice(1, 2); //remove the objects with the given index that means index 1 and 2 objects

//------------------forEach()---------------
//loop throught the elemtns in the array

fruits.forEach((fruit) => {
  console.log(fruit); // will conosle each object seperately
});

fruits.forEach((fruit) => {
  console.log(fruit.name);
});
// apple
// banana
// coconut

//----------------map()------------------------
// run through each element and return a new array

const fruitNames1 = fruits.map((fruit) => fruit.name);

const fruitNames2 = () => {
  return fruits.map((fruit) => fruit.name);
};

console.log(fruitNames1); //(3) ['apple', 'banana', 'coconut']
console.log(fruitNames2()); //(3) ['apple', 'banana', 'coconut']

//---------------filter()--------------------------
//filter will return a new array after using each elemtn and cehcking a condition

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
console.log(yellowFruits); //0:{name: 'banana', color: 'yellow', calories: 35}

const lowCalFruits = () => {
  return fruits.filter((fruit) => fruit.calories <= 100);
};
console.log(lowCalFruits());
// 0: {name: 'apple', color: 'red', calories: 95}
// 1: {name: 'banana', color: 'yellow', calories: 35}
// 2: {name: 'coconut', color: 'brown', calories: 70}

//---------------reduce()--------------------------
// will return a single value

const maxCalFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(maxCalFruit); //{name: 'apple', color: 'red', calories: 95}
