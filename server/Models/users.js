const mongoose = require('mongoose')

const usersSchema  =  mongoose.Schema({
    name :  {
        type : String,
    },
    password : {
        type : String,
    },
    

},{timestamps : true})

module.exports =  mongoose.model('users' , usersSchema)