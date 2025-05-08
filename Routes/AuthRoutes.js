const express = require('express');
const router = express.Router();
const  { registerAPI, loginAPI }= require ('../controllers/UserController');

// signupRoute

router.post('/api/signup',registerAPI);

// signinRoute
router.post('/api/signin',loginAPI);



module.exports=router;