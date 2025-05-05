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
  ],
  comment:[
    {
      type:mongoose.Schema.ObjectId,
      ref:'Comment'
    }
  ]
},  { timestamps: true });

const Tweets = mongoose.model("Tweets", tweetSchema);

export default Tweets;
