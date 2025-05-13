// 1. Load .env
require('dotenv').config();

// 2. Import dependencies
const express = require('express');
const cors = require('cors');
const db = require('./db/connection'); // This connects to MongoDB
const authRoutes = require('./routes/Index') // Auth routes (signup/login)
const employeeRoutes =require ('./routes/employeeRoutes')// Employee CRUD routes

const authServer = express();

authServer.use(cors());
authServer.use(express.json()); 
authServer.use('/api',authRoutes); 
authServer.use('/api',employeeRoutes);

authServer.get('/', (req, res) => {
  res.send("Welcome to Auth Server");
});


const PORT = process.env.PORT || 3000;
authServer.listen(PORT, () => {
  console.log("authServer running on port " + PORT);
});



