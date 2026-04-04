const users =  require('../Models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register  = async(req , res) =>{
    try{
            // checkUser
            const  {name ,  password} = req.body

            let dataUser =  await users.findOne({name})
            console.log(dataUser)

            if(dataUser){
                return res.status(400).send('User already exist')
            }

            // encrypt
            const salt  = await bcrypt.genSalt(10)
            dataUser = new users({
                name,
                password
            })

            // console.log(dataUser.password)
            dataUser.password = await bcrypt.hash(password , salt)
            console.log(dataUser)

            // save
            await dataUser.save()
            return res.send("Register Success")

    }catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

exports.login = async(req , res) => {
    try{
        // checkUser
        const {name , password} = req.body
        let dataUser = await users.findOneAndUpdate({name} , {new : true})
        console.log(dataUser)
        if(dataUser){
            const  isMatch = await bcrypt.compare(password , dataUser.password)

            if(!isMatch){
                return res.status(400).send('Password invalid')
            }
            // payload
            let payload = {
                dataUser : {
                    name : dataUser.name
                }
            }
            //generate token
            jwt.sign(payload , 'jwtsecret' ,  { expiresIn : '30s' } , (err , token) => {
                if(err) throw err;
                res.json({token , payload})
            })
        }else{
            return res.status(400).send('User not found')
        }

    }catch(err){
        console.log(err);
        res.status(500).send("Server Error")
    }
}