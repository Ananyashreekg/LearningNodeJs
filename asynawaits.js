function delayMessage() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Waited 3 seconds");
    }, 3000);
  });
}

async function run() {
  console.log("Start");

  let result = await delayMessage();  // waits here
  console.log(result);

  console.log("End");
}

run();
