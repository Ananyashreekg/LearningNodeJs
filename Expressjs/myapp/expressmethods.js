const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON body

// GET method
app.get('/info', (req, res) => {
  res.send('This is a GET request');
});

// POST method
app.post('/infop', (req, res) => {
  res.send(`Received POST data: ${JSON.stringify(req.body)}`);
});

// PUT method
app.put('/info', (req, res) => {
  res.send('This is a PUT request to update data');
});

// PATCH method
app.patch('/info', (req, res) => {
  res.send('This is a PATCH request to partially update data');
});

// DELETE method
app.delete('/info', (req, res) => {
  res.send('This is a DELETE request to remove data');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
