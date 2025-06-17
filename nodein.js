const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(name) {
  rl.question("Enter your age: ", function(ageStr) {
    const age = Number(ageStr);

    console.log("Hello, " + name);
    console.log("You are " + age + " years old.");

    if (age >= 18) {
      console.log("You can vote!");
    } else {
      console.log("You are too young to vote.");
    }

    rl.close();
  });
});