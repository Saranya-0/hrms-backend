const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required:  [true, " username is required"],
  },
  
  email: {
    type: String,
    required:[true, " email address is required"],
   
  },
  
  password: {
    type: String,
    required:  [true, " password is required"]
  },
  dob: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }

});


const users = mongoose.model('users', userSchema);
module.exports = users;
