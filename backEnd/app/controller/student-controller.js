let Student=require('../models/student');
exports.createStudent=(req,res)=>{
    let stud=new Student(req.body);
    stud.save().then((stud)=>{
        res.send(stud)
    }).catch((err)=>{
        console.log('Error', err);
    });
};
exports.fetchAllStudents=(req,res)=>{
    Student.find().then((students)=>{
        res.send(students)
    }).catch((err)=>{
        console.log('Error', err);
    });
};