let mongoose=require('mongoose');
let jwt=require('jsonwebtoken');
let userSchema=new mongoose.Schema({
    email:String,
    password:String,
    role:String
});

userSchema.statics.findByToken=function (token) {
    let user=this;
    let decoded;
    try{
        decoded=jwt.verify(token,'usermanagement');
    }
    catch(e) {
        return Promise.reject();
    }
    return user.findOne({
        _id:decoded._id
    })
};
module.exports=mongoose.model('user',userSchema);