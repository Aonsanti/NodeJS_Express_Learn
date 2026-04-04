const express = require('express');
const router = express.Router();
const { register , login } = require('../Controllers/auth')

//http://localhost:1150/api/register

// router.post('/register' , (req,res) =>{
//     res.send("Hello this is register");
// })

router.post('/register' , register)

// router.post('/login' ,  (req , res)  => {
//     res.send("This is  login")
// })

router.post('/login' , login)

module.exports = router
