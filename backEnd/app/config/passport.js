let User=require('../models/users');
let LocalStrategy=require('passport-local').Strategy;
let jwt=require('jsonwebtoken');
module.exports=(passport)=>{
    passport.serializeUser((user,done)=>{
        return done(null,user);
    });
    passport.deserializeUser((user,done)=>{
        return done(null,user);
    });
    passport.use('local',new LocalStrategy({
        usernameField:'email',
        passwordField:'password'
    },(username,password,done)=>{
        User.findOne({email:username}).then((user)=>{
            if(!user) {
                return done(null, false);
            }
            if (password !== user.password) {
                return done(null, false);
            }
            obj.userType=user.role;
            let access='auth';
            let token=jwt.sign({_id:user._id.toHexString(),access},'usermanagement').toString();
            obj.token=token;
            return done(null,user);
        })
    }))
};