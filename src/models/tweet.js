const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  
  hashTag:[
    {
      type:mongoose.Schema.ObjectId,
      ref:'HashTag'
    }
  ]
 
});

const Tweets = mongoose.model("Tweets", tweetSchema);

module.exports = Tweets;
