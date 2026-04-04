const express = require("express");
const router = express.Router();
const {read , list , create , update , remove } = require('../Controllers/product')

//middleware
const { auth } = require('../Middleware/auth')

//http://localhost:1150/api/product
router.get('/product' , auth ,list)
router.get('/product/:id' , auth , read)
router.post('/product' , auth  , create)
router.put('/product/:id' , auth , update)
router.delete('/product/:id' , auth , remove)

// router.post('/product' , (req , res) => {
//     res.send("This is product post")
// })

// router.put('/product' , (req , res) => {
//     res.send("This is product push")
// })

// router.put('/product/:id' , (req , res) => {
//     res.send("put 1 product")
// })

// router.delete('/product/:id' , (req , res) => {
//     res.json({
//         name: "Santi",
//         nickname:"Aon",
//         id: 123,
//     })
// })

module.exports = router