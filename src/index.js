const express = require("express");
const app = express();
const connectDB = require("./config/database");
const HashTag = require("./models/hashtag");
const { TweetService } = require("./services/index");
const tweetService = new TweetService();
app.listen(3000, async () => {
    console.log("Server is listning");
    await connectDB();
    console.log("connected to mongoDb");
    const tweet = await tweetService.createTweet({content : "hello ji #first #third kaise ho #Second"});

    // const hashTag = await HashTag.create({title : 'Second'});
    // console.log(hashTag)
});

// const tweets = await Tweets.find({
//     content: ["Hello"],
//   });
// const tweet = await Tweets.create({content : 'Hello ji'});

// const comment = await Comment.create({content: "hello ji this is my comments"});
// tweet.comments.push(comment);
// await tweet.save();
// const tweet = await Tweet.findById('6810c54951f7e84b16bb2093').populate('Comment');
// console.log(tweet);
// await tweet.save()
// console.log(tweet);
