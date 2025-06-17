function greetUser(name, callback) {
  console.log("Hi " + name);
  callback();  // calling the function passed
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Ananya", sayBye);
