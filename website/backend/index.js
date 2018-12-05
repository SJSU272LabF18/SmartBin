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
app.use(cors({ origin: url, credentials: false }));

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

app.post('/bininfo', function (req,res,next) {
  console.log("inside get bin trace data",req.body.bin_id);
  var mydate = new Date().toISOString();
  console.log("Value of mydate: ", mydate);
  var d = new Date();
  var bindata='';
  var labelArray=new Array();
  var dataset=new Array();
  d.setDate(d.getDate() - 1);
  console.log("Value of d: ", d);
  var datamap = new Map();
  trashcapacities.find({_id:req.body.bin_id})
  .exec()
  .then(result => {
    console.log("Response sent after fetching is : ", result[0].capacity);
    dataset = result[0].capacity;
    for(var i =3 ; i >=0;i--) {
      var d1=new Date();
      d1.setDate(d1.getDate() - i);
      // console.log("COnverting to ISO string", d1.toISOString());
      var oldData = d1.toISOString().split('T')[0];
      console.log("Value of old date:", oldData);
      var heightSum=0;
      var count=0;
      for(var j=0;j<dataset.length;j++) {
        var datevalue=dataset[j].timestamp;
        var newdate = datevalue.toString().split('T')[0];
        console.log("Here I am", newdate);
        // console.log("Value of all data", oldData);
        // var data=new Date(dataset[j].timestamp);
        // console.log("Value of new Date:", data);
        if(oldData.split('-')[2]==newdate.split('-')[2]) {
          console.log("Inside if");
          heightSum+=dataset[j].height;
          count++;
          var v = oldData;
        }

      }
      var finalData=heightSum/count;
      labelArray.push(finalData);
      datamap.set(finalData,v);
    }
    for (let [key, value] of datamap) {
        console.log(key + ' ' + value);
    }
    res.status(200).json({bindata  : datamap});
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

var server = app.listen(3001,()=>{
    console.log("Linkedin server has started to listen at http://localhost:3001" );
});





// "timestamp": {
//                 $lte: new Date(mydate).toISOString()
//               },
// "timestamp": {
//                 $gte: new Date(d).toISOString()
//               }
