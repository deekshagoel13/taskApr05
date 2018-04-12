let studentController=require('../controller/student-controller');
let eventController=require('../controller/event-controller');
let userController=require('../controller/user-controller');
module.exports=(app,passport)=>{

    app.post('/auth/login',passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/login'
    }));
    app.get('/',(req,res)=>{
        res.send({'msg':'success',"obj":obj});
    });
    app.get('/login',(req,res)=>{
        res.status(401).send({'msg':'failure',"obj":{}});
    });
    app.post('/student',studentController.createStudent);
    app.post('/user',userController.createUser);
    app.get('/students',userController.authenticate,studentController.fetchAllStudents);
    app.post('/event',userController.authenticate,eventController.createEvent);
    app.get('/events',userController.authenticate,eventController.fetchAllEvents);
};