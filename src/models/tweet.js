const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const Tweets = mongoose.model("Tweets", tweetSchema);

module.exports = Tweets;
