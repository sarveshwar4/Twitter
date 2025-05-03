const {TweetService} = require('../services/index');
const tweetService = new TweetService();
const create = async(req, res)=>{
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

module.exports = {create};