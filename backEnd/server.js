let express=require('express');
let bodyParser=require('body-parser');
let mongoose=require('mongoose');
let cors=require('cors');
let passport=require('passport');
let dbconfig=require('./app/config/dbConfig');
mongoose.connect(dbconfig.url);
let db=mongoose.connection;
db.once('open',()=>{
    console.log('successfully connected to the database');
});

global.obj={};
let app=express();
require('./app/config/passport')(passport);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());
require('./app/routes/routes')(app,passport);
app.listen(3005,()=>{
    console.log('server started successfully.');
});