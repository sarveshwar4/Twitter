import { TweetRepository } from "../repository/index.js";
import {LikeRepository} from "../repository/index.js";
import {CommentRepository} from "../repository/index.js";

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
        this.commentRepository = new CommentRepository();
    }

    async toggleLike(modelid, modelName, userId){
         try {
            if(modelName == 'Tweets'){
            var likeable = await this.tweetRepository.get(modelid);
            }
            else if(modelName == 'Comment'){
                // extract the comment
             var likeable = await this.commentRepository.get(modelid);
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