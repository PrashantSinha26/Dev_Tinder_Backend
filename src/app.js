const express = require('express');

const app = express();

app.use('/hello', (req, res) => {
  res.send('Hello to Express');
});

app.use('/test', (req, res) => {
  res.send('Test is to be display');
});

app.listen(7777, () => {
  console.log('Listerning to port 7777');
});
