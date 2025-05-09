
const express = require('express');
const router = express.Router();

const  { registerAPI, loginAPI }= require ('../controllers/UserController');

// signupRoute

router.post('/signup',registerAPI);

// signinRoute
router.post('/signin',loginAPI);


module.exports=router;