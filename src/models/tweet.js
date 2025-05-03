import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const Tweets = mongoose.model("Tweets", tweetSchema);

export default Tweets;
