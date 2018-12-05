var mongoose = require('mongoose');

var trashcapacities = mongoose.model('trashcapacities',{
    
       location :  {type : String, required : false},
        max_height : {type : String, required : false},
        capacity : {type : Array, required : false}

    });

module.exports = {trashcapacities};
