const express  = require("express");

const morgan = require('morgan');
const cors = require('cors');
const bodyParse = require('body-parser');
const connectMongoose = require('./Config/mongoose')

const {readdirSync} = require('fs')
// const productRouter = require('./Routes/product')
// const authRouter = require('./Routes/auth')
const app = express();

connectMongoose()

app.use(morgan('dev'))
app.use(bodyParse.json({
    limit : '10mb',
}))
app.use(cors())

// app.use('/api' , productRouter , authRouter)
readdirSync('./Routes').map((file) => app.use('/api' , require('./Routes/' + file)))


app.listen(1150 , ()=> console.log("Server is running on port 1150"))