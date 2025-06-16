const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://Prashant:kK9qy5qg5nxUZpWU@learnnodejs.j51t2to.mongodb.net/devTinder'
  );
};

module.exports = connectDB;
