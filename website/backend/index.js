var express = require('express');
const path = require('path');
var app = express();
//var fs=require('file-system');
var session = require("express-session");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
//const multer = require('multer');
var {mongoose} = require('./db/mongoose');
//var {Applications} = require('./models/application');
var {trashcapacities} = require('./models/trashcapacity');
const url = "http://localhost:3000";
//const url = "hosting url";
app.use(cors({ origin: url, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', url);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });


app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//redis client
// let client = redis.createClient(6379,'127.0.0.1');
// client.on('connect', function(){
//   console.log('connected to redis');
// })

app.post('/bininfo', function(req, res, next){

    trashcapacities.findOne({_id:req.body.id}).then((app)=> {
        //console.log("\nNumber of applied jobs: " + app.length + "\n");
        console.log("result : "+ app.capacity[app.capacity.length-1].height );
        let maxHeight = app.capacity[app.capacity.length-1].height
        res.writeHead(200,{
            'Content-Type' : 'application/json'
        })
        res.end(JSON.stringify(maxHeight));
    }, (err) => {
        console.log("error : " + err)
        console.log("inside 400");
        res.sendStatus(400);
    
    }

  );
});
var server = app.listen(3001,()=>{
    console.log("Linkedin server has started to listen at http://localhost:3001" );
});
