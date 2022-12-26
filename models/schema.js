const mongoose=require("mongoose");

const Schema=mongoose.Schema({
    name:String,
    age:Number,
    status:String
})

module.exports=mongoose.model(Schema);