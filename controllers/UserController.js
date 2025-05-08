const users = require('../models/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); 

// Register logic
exports.registerAPI = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const existingUser = await users.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ msg: 'User already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10); 
      const newUser = new users({ username, email, password: hashedPassword });
      await newUser.save();
  
   
      const token = jwt.sign({ userId: newUser._id }, process.env.jwtKey, { expiresIn: '2h' });
      res.status(201).json({ msg: 'Signup successful'});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Login logic
exports.loginAPI = async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await users.findOne({ email });
      if (!existingUser) return res.status(400).json({ msg: 'User not found' });
  
      const isMatch = await bcrypt.compare(password, existingUser.password); 
      if (!isMatch) return res.status(400).json({ msg: 'Incorrect password' });
  
      
      const token = jwt.sign({ userId: existingUser._id }, process.env.jwtKey, { expiresIn: '2h' });
      res.status(200).json({ msg: 'Login successful', token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
