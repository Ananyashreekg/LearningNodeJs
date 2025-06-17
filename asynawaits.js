function delayMessage() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Waited 2 seconds");
    }, 2000);
  });
}

async function run() {
  console.log("Start");

  let result = await delayMessage();  // waits here
  console.log(result);

  console.log("End");
}

run();
