let User=require('../models/users');
exports.createUser=(req,res)=>{
    let user=new User(req.body);
    user.role='S';
    user.save().then((user)=>{
        res.send(user)
    }).catch((err)=>{
        console.log('Error', err);
    });
};

exports.authenticate=(req,res,next)=>{
    let token=req.header('x-auth');
    User.findByToken(token).then((user)=>{
        if(user)
            next();
    }).catch(()=>{
        res.send({"msg":"Please Login First."})
    })
};