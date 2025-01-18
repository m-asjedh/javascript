// setTimeout() = function in JS that allows you to schedule the execution of a function after an amount of time (milliseconds).
//                Times are approximate (vareis based on the workload of the JS runtime env.)

//                setTimeout (callback,delay)

// const sayHello = () => {
//   window.alert("Helloooooooo");
// };

// setTimeout(sayHello, 3000);

// setTimeout(function () {
//   window.alert("Hellllloooooo222222");
// }, 4000);

// setTimeout(() => {
//   window.alert("Helllllloooo333333");
// }, 5000);

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTER");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}
