// my-app/server.js

const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS to allow requests from your React app (running on a different domain/port)
app.use(cors());

// Serve JSON data for all branches
const branch1Data = require('./src/api/branch1.json');
const branch2Data = require('./src/api/branch2.json');
const branch3Data = require('./src/api/branch3.json');

app.get('/api/branch1.json', (req, res) => {
  res.json(branch1Data);
});

app.get('/api/branch2.json', (req, res) => {
  res.json(branch2Data);
});

app.get('/api/branch3.json', (req, res) => {
  res.json(branch3Data);
});

// Start the server on port 8000
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
