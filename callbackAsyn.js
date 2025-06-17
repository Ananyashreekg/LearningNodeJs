function loadData(callback) {
  setTimeout(() => {
    console.log("Data loaded from server");
    callback(); // run after loading
  }, 2000);
}

console.log("Loading data...");

loadData(() => {
  console.log("Now displaying the data");
});

// loadData(loadData);--> Recurrsive error occurs