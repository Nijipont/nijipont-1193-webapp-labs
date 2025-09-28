// calculator.js

const args = process.argv.slice(2);
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

if (args.length !== 2 || isNaN(num1) || isNaN(num2)) {
  console.log("Please enter two numbers");
  process.exit(1);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("add | subtract ", (operator) => {
  if (operator === "add") {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
  } else if (operator === "subtract") {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
  } else {
    console.log("Unknown operator");
  }

  rl.close();
});
