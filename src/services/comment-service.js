import { CommentRepository } from "../repository/index.js";
import {TweetRepository} from "../repository/index.js";
class CommentService{
    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetrepository = new TweetRepository();
    }
    async createCommment(modelType, modelId, userId, content){
        try {
            console.log(modelType, modelId, userId)
            if(modelType == 'Tweets'){
            var commentable = await this.tweetrepository.get(modelId);
            console.log(commentable)
            }
            else if(modelType == 'Comment'){
            var commentable = await this.commentRepository.get(modelId)
            }
            else{
                throw new Error('Not valid modelType....');
            }
            const newComment = await this.commentRepository.create({
                content:content,
                onModel:modelType,
                userId:userId,
                commentable:modelId,
            });
            console.log('hello i am sarveshwar', newComment)
            commentable.comment.push(newComment._id);
            commentable.save();
            return commentable;
        } catch (error) {
            console.log('Something went wrong on service layer');
            throw error;
        }
    }
}

export default CommentService;