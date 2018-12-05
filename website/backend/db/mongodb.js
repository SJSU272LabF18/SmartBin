// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://arihant:arihant12345@ds041157.mlab.com:41157/trash-capacity-notifier";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("trash-capacity-notifier");
//   dbo.collection("TrashCapcity").find({}, function(err, result) {
//     if (err) throw err;
//     console.log("results are")
//     console.log(result);
//     result.forEach(element => {
//         console.log(element);
//     });
//     db.close();
//   });
// });