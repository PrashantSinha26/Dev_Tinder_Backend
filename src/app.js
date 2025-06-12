const express = require('express');

const app = express();

app.get(
  '/user',
  (req, res, next) => {
    console.log('Response 1');
    next();
    res.send('Hi');
  },
  (req, res, next) => {
    console.log('Response 2');
    res.send('Hi2');
    next();
  },
  (req, res, next) => {
    console.log('Response 3');
    res.send('Hi3');
  }
);

app.listen(7777, () => {
  console.log('Listerning to port 7777');
});
