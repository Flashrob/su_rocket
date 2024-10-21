var test = 0;
let test2 = 1;
const test3 = 2;

if (true) {
  const test3 = "Hello";
  // console.log(test3);
}

// SCOPE

// var = global scope / function scope

function stuff() {
  var banana = "banana";

  if (true) {
    banana = "mango";
  }

  console.log(banana);
}

let five = 4;
five = 5;

var six = 5;
var six = 6;

// stuff();

// let, const = block scope

// FUNCTIONS

function name() {} // function declaration

const name2 = function () {}; // function expression

const name3 = () => {}; // arrow function

// TEMPLATE LITERALS
const diceRoll = 5;

// old school

var out = "you rolled " + diceRoll + ". nice job!";

let output = `you rolled ${diceRoll}. nice job!`;
