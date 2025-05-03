const Tweet = require('../models/tweet');

class TweetRepository{

    async create(data){
        try {
            const response = await Tweet.create(data);
            return response;
        } catch (error) {
            console.log('Something went wromg in repo layer');
            throw error;
        }
    }

    async get(id){
        try {
            const response = await Tweet.findById(id);
            return response;
        } catch (error) {
            console.log('Something went wromg in repo layer');
            throw error;
        }
    }
    async delete(id){
        try {
            const response = await Tweet.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log('Something went wromg in repo layer');
            throw error;
        }
    }
}

module.exports = TweetRepository;