let promise = new Promise((resolve, reject) => {
  let success = true; //false for reject output 
  if (success) {
    resolve("Success! ");
  } else {
    reject("Something went wrong ");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
