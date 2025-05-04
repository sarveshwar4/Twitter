import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  likes:[
    {
      type:mongoose.Schema.ObjectId,
      ref:'Like'
    }
  ]
});

const Tweets = mongoose.model("Tweets", tweetSchema);

export default Tweets;
