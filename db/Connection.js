const mongoose = require('mongoose');


const connectionString = process.env.connectionString;

if (!connectionString) {
  console.error('MongoDB connection string is missing.');
  process.exit(1); 
}

mongoose.connect(connectionString)
  .then(() => {
    console.log("Auth server is connected to DB");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err.message); 
    process.exit(1);
  });

