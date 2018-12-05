var mongoose = require('mongoose');

var TrashCapacity = mongoose.model('TrashCapacity',{
       location :  {type : String, required : false},
        max_height : {type : String, required : false},
        capacity : {type : Array, required : false}

    });

module.exports = {TrashCapacity};
