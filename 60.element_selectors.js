// element selectors = Methods used to target and manipluate HTML elemnts.
//                     They allow you to select one or multiple HTML elements from the DOM

//1. document.getElementById()              // ELEMENT OR NULL
//2. document.getElementsClassName()        // HTML COLLECTION
//3. document.getElementByTagName()         // HTML COLLECTION
//4. document.querySelector()               // ELEMENT OR NULL
//5. document.querySelectorAll()            // NODELIST

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

//-----------------------------------------------------------
//index.html
// <div class='fruits'> Apple</div >
// <div class='fruits'>Orange</div>
// <div class='fruits'>Grapoes</div>

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);
//HTMLCollection
// 0: div.fruits
// 1: div.fruits
// 2: div.fruits

fruits[0].style.backgroundColor = "yellow";

for (let fruit of fruits) {
  fruit.style.backgroundColor = "yellow";
}

//fruits.forEach(())     HTMLcollection doesnt support forEach

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});

//------------------------------------------------------------
