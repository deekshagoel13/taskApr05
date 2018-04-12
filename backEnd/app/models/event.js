let mongoose=require('mongoose');
let eventSchema=new mongoose.Schema({
    Name:String,
    location:String,
    eventDate:Date
});
module.exports=mongoose.model('event',eventSchema);