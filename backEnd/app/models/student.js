let mongoose=require('mongoose');
let studSchema=new mongoose.Schema({
    Name:String,
    email:String,
    gender:String,
    standard:String,
    contactNo:String
});
module.exports=mongoose.model('student',studSchema);