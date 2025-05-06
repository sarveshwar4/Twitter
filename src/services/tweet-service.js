import { TweetRepository, HashTagRepository } from "../repository/index.js";
class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashTagRepository = new HashTagRepository();
  }
  async createTweet(data) {
    try {
      const content = data.content;
      const tags = content
        .match(/#[a-zA-Z0-9]+/g)
        .map((tg) => tg.substring(1).toLowerCase());
      const tweet = await this.tweetRepository.create(data);
      const alreadyPresentTags = await this.hashTagRepository.getByName(tags);
      const title = alreadyPresentTags.map((data) => data.title);
      const newTags = tags.filter((tag) => !title.includes(tag));
      const finalInsertingTags = newTags.map((tag) => ({
        title: tag,
        tweet: [tweet.id],
      }));
      await this.hashTagRepository.bulkInsert(finalInsertingTags);
      alreadyPresentTags.forEach((tag) => {
        tag.tweet.push(tweet.id);
        tag.save();
      });
      return tweet;
    } catch (error) {
      console.log("SomeThing Went Wrong in Service layer");
      throw error;
    }
  }

  async deleteTweet(id) {
    try {
      const tweet = await this.tweetRepository.get(id);
      const content = tweet.content;
      const tags = content.match(/#[a-zA-Z0-9]+/g)
      .map((tag)=>tag.substring(1).toLowerCase());
      const hashTags = await this.hashTagRepository.getByName(tags);
      hashTags.forEach((tags)=>{
        tags.tweet.pull(tweet._id);
        tags.save();
      });
      const response = await this.tweetRepository(tweet._id);
      return response;
    } catch (error) {
      console.log("SomeThing Went Wrong in Service layer");
      throw error;
    }
  }


  async getTweet(id) {
    try {
      console.log(id);
      const tweet = await this.tweetRepository.get(id);
      return tweet;
    } catch (error) {
      console.log("SomeThing Went Wrong in Service layer");
      throw error;
    }
  }
}

export default TweetService;

// async createTweet(data) {
//   const content = data.content;
//   let tag = content.match(/#[a-zA-Z0-9]+/g);
//   tag = tag.map((element) => element.substring(1));
//   const tweet = await this.tweetRepository.create(data);
//   const hashTag = await hashaTags.find({ title: tag });
//   const aleradyExistTag = [];
//   hashTag.forEach((tg) => {
//     aleradyExistTag.push(tg.title);
//   });
//   tag.forEach(async (tg) => {
//       const exist = aleradyExistTag.includes(tg);
//      console.log(exist)
//     if (!exist) {
//       const hashTagCreation = await Hashtag.create({ title: tg });
//       console.log(hashTagCreation);
//     }
//   });
//   const allrequiredTags = await hashaTags.find({ title: tag}).lean();
//   // saving hashTagId inside the twet
//   allrequiredTags.forEach(tag => {
//       tweet.hashTag.push(tag._id);
//   });
//   await tweet.save();

//   // saving the tweetid to coresponding hashTags documents..
//   tag.forEach(async (tg)=>{
//       const reqTag = await Hashtag.findOne({ title: tg });
//       if (reqTag) {
//           reqTag.tweet.push(tweet._id);
//           await reqTag.save();
//           console.log(reqTag);
//       }
//   })
//   // bullInsert,
//   // insert those hashTag those are not present
//   // based on this insert the hashtag id inside the twee
// }
