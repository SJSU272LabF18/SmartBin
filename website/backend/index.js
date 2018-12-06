var express = require('express');
const path = require('path');
var { mongoose } = require("./db/mongoose");

var app = express();
var fs=require('file-system');
var session = require("express-session");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
var {trashcapacities} = require('./models/trashcapacity');
const url = "http://localhost:3000";
//const url = "hosting url";
app.use(cors({ origin: url, credentials: true }));

app.use(function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', url);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/bininfo/:ID1', function (req,res,next) {
  console.log("inside get bin trace data",req.params.ID1);
  var mydate = new Date().toISOString();
  console.log("Value of mydate: ", mydate);
  var d = new Date();
  var bindata='';
  var labelArray=new Array();
  var dataset=new Array();
  d.setDate(d.getDate() - 1);
  console.log("Value of d: ", d);
  var datamap = new Map();
  trashcapacities.find({_id:req.params.ID1})
  .exec()
  .then(result => {
    console.log("Response sent after fetching is : ", result[0].capacity);
    res.status(200).json({
            bindata: result[0].capacity
          });

  })
    .catch(err => {
      console.log("error while fetching", err);
      res.write('');
      // res.sendStatus(201);
  })

  // res.end();
//   const dustbins=new Dustbin({
//   location: req.body.location,
//   max_height: req.body.max_height
// });
// Dustbin.find({_id:req.body.bin_id})
// .exec()
// .then(result => {
//   console.log("Response sent after fetching is : ", result);
//   res.status(200).json({bindata  : result});
// })
// dustbins.save().then(result => {
//     console.log("result: ", result);
//   res.status(200).json({
//         result:result
//       });
// })
// .catch(err=> {
//   res.status(400).json({
//           message : "User trace can not be saved"
//         });
// });
});
app.post('/binheightinfo/:ID', function(req, res, next){

    trashcapacities.findOne({_id:req.params.ID}).then((app)=> {
        console.log("\nNumber of applied jobs: " + app);
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
app.get('/getbins', function(req, res, next){
      trashcapacities.find()
      .exec()
      .then(result => {
        console.log("Response sent after fetching is : ", result);
        res.status(200).json({
                bindata: result
              });

      })
        .catch(err => {
          console.log("error while fetching", err);
          res.write('');
          // res.sendStatus(201);
      })
  });
var server = app.listen(3001,()=>{
    console.log("Linkedin server has started to listen at http://localhost:3001" );
});





// "timestamp": {
//                 $lte: new Date(mydate).toISOString()
//               },
// "timestamp": {
//                 $gte: new Date(d).toISOString()
//               }
