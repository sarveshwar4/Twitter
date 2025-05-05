import Tweet from '../models/tweet.js'

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
            const response = await Tweet.findById(id).populate('likes');
            console.log("hello ji",response)
            return response;
        } catch (error) {
            console.log('Something went wromg in repo layer');
            throw error;
        }
    }
    async getAll(){
        try {
            const response = await Tweet.find({});
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

export default TweetRepository;