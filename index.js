// 1. Load .env
require('dotenv').config();

// 2. Import dependencies
const express = require('express');
const cors = require('cors');
const db = require('./db/Connection'); // This connects to MongoDB
const authRoutes = require('./Routes/AuthRoutes') 

const authServer = express();

authServer.use(cors());
authServer.use(express.json()); 
authServer.use('/auth', authRoutes); 

authServer.get('/', (req, res) => {
  res.send("Welcome to Auth Server");
});


const PORT = process.env.PORT || 3000;
authServer.listen(PORT, () => {
  console.log("authServer running on port " + PORT);
});



