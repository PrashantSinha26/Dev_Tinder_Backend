const express = require('express');

const app = express();

// app.use('/', (req, res) => {
//   res.send('This side Prashant');
// });

app.get('/user', (req, res) => {
  res.send({ firstName: 'Prashant', lastName: 'Sinha' });
});

app.post('/user', (req, res) => {
  res.send('Data added successfully');
});

app.delete('/user', (req, res) => {
  res.send('Data is deleted');
});
// Order of the requesting the server matters

// app.use('/hello/2', (req, res) => {
//   res.send('Hello to Express 2');
// });

// app.use('/hello', (req, res) => {
//   res.send('Hello to Express');
// });

// app.use('/test', (req, res) => {
//   res.send('Test is to be display');
// });

app.listen(7777, () => {
  console.log('Listerning to port 7777');
});
