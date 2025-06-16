const express = require('express');
const connectDB = require('./config/database');
const app = express();
const User = require('./models/user');

app.post('/signup', async (req, res) => {
  const user = new User({
    firstName: 'Anushka',
    lastName: 'Chavre',
    email: 'ac@gamil.com',
    age: '21',
    gender: 'Female',
  });

  try {
    await user.save();
    res.send('Added Successfully');
  } catch (err) {
    res.status(400).send('Error occurs', +err.message);
  }
});

connectDB()
  .then(() => {
    console.log('Connection Successful');
    app.listen(7777, () => {
      console.log('Listerning to port 7777');
    });
  })
  .catch((err) => {
    console.error('Error Occured');
  });
