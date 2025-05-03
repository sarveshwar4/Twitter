const { TweetRepository } = require("../repository/index");
const hashaTags = require("../models/hashtag");
const Hashtag = require("../models/hashtag");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async createTweet(data) {
    const content = data.content;
    let tag = content.match(/#[a-zA-Z0-9]+/g);
    tag = tag.map((element) => element.substring(1));
    const tweet = await this.tweetRepository.create(data);
    const hashTag = await hashaTags.find({ title: tag });
    const aleradyExistTag = [];
    hashTag.forEach((tg) => {
      aleradyExistTag.push(tg.title);
    });
    tag.forEach(async (tg) => {
        const exist = aleradyExistTag.includes(tg);
       console.log(exist)
      if (!exist) {
        const hashTagCreation = await Hashtag.create({ title: tg });
        console.log(hashTagCreation);
      }
    });
    const allrequiredTags = await hashaTags.find({ title: tag}).lean();
    // saving hashTagId inside the twet
    allrequiredTags.forEach(tag => {
        tweet.hashTag.push(tag._id);
    });
    await tweet.save();

    // saving the tweetid to coresponding hashTags documents..
    tag.forEach(async (tg)=>{
        const reqTag = await Hashtag.findOne({ title: tg });
        if (reqTag) {
            reqTag.tweet.push(tweet._id);
            await reqTag.save();
            console.log(reqTag);
        } 
    })
    // bullInsert,
    // insert those hashTag those are not present
    // based on this insert the hashtag id inside the twee
  }
}

module.exports = TweetService;
