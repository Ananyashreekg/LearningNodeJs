const express = require('express');
const app = express();

// ✅ Built-in middleware to parse JSON
app.use(express.json());

// ✅ Custom middleware to log each request
function loggerMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route
}

app.use(loggerMiddleware); // Apply custom middleware globally

// ✅ Route handler
app.get('/', (req, res) => {
  res.send('Hello from Express with Middleware!');
});

// ✅ Another route to demonstrate POST and express.json()
app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  res.send('Data received successfully!');
});

// ✅ Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
