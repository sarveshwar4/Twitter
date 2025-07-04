import {TweetService} from '../services/index.js'
const tweetService = new TweetService();
export const create = async(req, res)=>{
    try {
        const response = await tweetService.createTweet(req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Tweet is created Successfully',
            err:{},
        });
    } catch (error) {
        return res.status(201).json({
            data:{},
            success:false,
            message:'Something went wrong',
            err:error,
        });
    }
   
};

export const deleteTweet = async(req, res)=>{
    try {
        const response = await tweetService.deleteTweet(req.para);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Tweet is created Successfully',
            err:{},
        });
    } catch (error) {
        return res.status(201).json({
            data:{},
            success:false,
            message:'Something went wrong',
            err:error,
        });
    } 
};
export const getTweet = async(req, res)=>{
    try {
        const response = await tweetService.getTweet(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Tweet is fetched Successfully',
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'Something went wrong',
            err:error,
        });
    }  
};

