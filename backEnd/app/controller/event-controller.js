let Event=require('../models/event');
exports.createEvent=(req,res)=>{
    let event=new Event(req.body);
    event.save().then((e)=>{
        res.send(e)
    }).catch((err)=>{
        console.log('Error', err);
    });
};
exports.fetchAllEvents=(req,res)=>{
    Event.find().then((events)=>{
        res.send(events)
    }).catch((err)=>{
        console.log('Error', err);
    });
};