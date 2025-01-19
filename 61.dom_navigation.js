//DOM navigation = The processs of navigating through the strucutre of an HTML document using JS

//.firstElementChild
//.lastElementChild
//.nextElementChild
//.previousElementSibling
//.parentElement
//.children

//-------------------  .firstElementChild  --------------------
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

//-------------------  .lastElementChild  --------------------
const lastelement = document.getElementById("fruits");
const lastChild = lastelement.lastElementChild;
lastChild.style.backgroundColor = "red";

// -----------------  .nextElementChild ---------------------
const thirdelement = document.getElementById("orange");
const nextSibling = thirdelement.nextElementSibling;
nextSibling.style.backgroundColor = "green";

// -----------------  .previousElementSibling ---------------------
const fourthelement = document.getElementById("banana");
const previousSibling = fourthelement.previousElementSibling;
previousSibling.style.backgroundColor = "blue";

// -----------------  .parentElement ---------------------
const fifithElemnt = document.getElementById("fruits");
const parent = fifithElemnt.parentElement;
parent.style.backgroundColor = "pink";

// -----------------  .children ---------------------
const sixthelement = document.getElementById("fruits");
const children = element.children;

console.log(children);
//HTMLCollection(3) [li#orange, li#apple, li#banana, orange: li#orange, apple: li#apple, banana: li#banana]
