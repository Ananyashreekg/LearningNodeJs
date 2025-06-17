function greet() {
  return new Promise(resolve => {
    console.log("Hello!");
    resolve("Hi from greet");
  });
}

function respond(message) {
  return new Promise(resolve => {
    console.log("Received:", message);
    resolve("Response sent!");
  });
}

greet()
  .then(result => {
    return respond(result);  // passing result to next
  })
  .then(finalMessage => {
    console.log(finalMessage);
  });
