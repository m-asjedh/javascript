// Error = An object that is created to represent a problem that occurs.
//          Occur often with the user input or establishing a conection

// try {} = Encloses code that might potentially cause and error
// catch {} = Catch and handle any thrown Errors from try {}
// finally {} = (optional) Always executes. Used mostlly for clean up
//               ex. close files, close connections and release resources

// console.lag("Hello"); // it is not lag it log so an error created so the pogram stops from this line
// console.log("You have reached the end!");

try {
  console.log(x);
} catch (error) {
  console.error(error);
} finally {
  console.log("Always executes");
}
console.log("You have reached the end!");

//ReferenceError: x is not defined
//Always executes
//You have reached the end!

try {
  const dividened = window.prompt("Enter a dividend");
  const divisor = window.prompt("Enter a divisor");

  if (divisor == 0) {
    throw new Error("You can divide by zero");
  }

  const result = dividened / divisor;
  console.log(result);
} catch (error) {
  console.log(error);
}

//Error: You can divide by zero
