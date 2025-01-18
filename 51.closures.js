//closures - A function deifined inside of another function,
//           the inner function has access to the variables and scope of the outer function.
//           Allow for private varibales and state maiatainenace Used frequenstly in JS framework L Reactjs,VUe Angular

const outer = () => {
  let message = "Hello";
  const inner = () => {
    console.log(message);
  };
  inner();
};
outer();

function createCounter() {
  let count = 0;
  function increament() {
    count++;
    console.log(`Count increases to ${count}`);
  }

  function getCount() {
    return count;
  }
  return { increament, getCount };
}

const counter = createCounter();

counter.increament();
counter.increament();
counter.increament();
counter.increament();

console.log(counter.getCount());

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points} points`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points} points`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const gameCounter = createGame();

gameCounter.increaseScore(10);
gameCounter.increaseScore(10);
gameCounter.decreaseScore(2);
console.log(`Total Points ${gameCounter.getScore()}`);
