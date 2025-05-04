import { TweetRepository } from "../repository/index.js";
import {LikeRepository} from "../repository/index.js";

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelid, modelName, userId){
         try {
            if(modelName == 'Tweets'){
            //extract the tweet 
            var likeable = await this.tweetRepository.get(modelid);
            console.log("there is likeable instance of tweet",likeable)
            }
            else if(modelName == 'Comment'){
                // todo
            }
            else{
                throw new Error('Unknown modelname...');
            }
            const exist = await this.likeRepository.get({
                onModel:modelName,
                likeable:modelid,
                userId:userId
            });
            console.log("is exist", exist)
            if(exist){
                likeable.likes.pull(exist._id);
                await likeable.save(); 
                await this.likeRepository.delete(exist._id); 
                var isLike = false;
            }
            else{
                const like = await this.likeRepository.create({
                    onModel:modelName,
                    likeable:modelid,
                    userId:userId
                });
                console.log(like)
                likeable.likes.push(like._id);
                likeable.save();
                var isLike = true;
            }
            return isLike;
         } catch (error) {
            
         }
    }
}

export default LikeService;