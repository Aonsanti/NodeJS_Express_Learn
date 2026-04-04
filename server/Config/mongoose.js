const mongoose = require('mongoose');
const connectMongoose = async() =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/SantiMongoose')
        console.log('Mongoose Connected')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectMongoose