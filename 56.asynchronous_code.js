// synchronous = Executes line by line consecutively in a sequential manner.
//               Code that waits for an operation to complete

//asynchronous = Allows mutliple operation to be perfromed concurrently wihtout waiting.
//               Deosnt block execution flow and allows the program to continue (I/O operations, network requests, fetching data).
//               Handled with: Callbakcs, Prmoises, Async/Await

//synchronous code
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

//asynchronous code
function func1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 3000);
}

function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

func1(func2);
