var mongoose = require('mongoose');

var Dustbin = mongoose.model('Dustbin',{
       location :  {type : String, required : false},
        max_height : {type : String, required : false}

    });

module.exports = {Dustbin};
