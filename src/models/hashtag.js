const mongoose = require('mongoose');

const hashTagSchema  = new mongoose.Schema({
   title:{
       type : String,
   },
   tweet:[
     {
        type:mongoose.Schema.ObjectId,
        ref:'Tweets'
     }
   ]
});

const Hashtag = mongoose.model('HashTag', hashTagSchema);

module.exports = Hashtag;