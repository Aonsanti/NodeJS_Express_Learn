const product = require('../Models/product')

exports.read = async(req , res) => {
        try{
        const id = req.params.id
        const showProduct = await product.findOne({_id:id}).exec();
        res.send(showProduct);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
}

exports.list = async(req , res) =>{
    try{
        const showProduct = await product.find({}).exec();
        res.send(showProduct);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
}

exports.create = async(req , res) =>{
    try{
        console.log(req.body)
        const pushProduct = await product(req.body).save()
        res.send(pushProduct)
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
}

exports.update = async(req , res) =>{
    try{
        const id = req.params.id;
        const updateProduct = await product
        .findOneAndUpdate({_id:id} , req.body , {new : true})
        .exec();
        res.send(updateProduct);
    }catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

exports.remove = async(req , res) =>{
    try{
        const id =  req.params.id;
        const remove =  await product.findOneAndDelete({_id : id}).exec();
        res.send(remove);
    }catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}