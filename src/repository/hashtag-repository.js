import Hashtag from '../models/hashtag.js';
class HashTagRepository{
    async create(data){
        try {
            const response = await Hashtag.create(data);
            return response;
        } catch (error) {
            console.log('Something went wromg in repo layer');
            throw error;
        }
    }

    async bulkInsert(data) {
        try {
            const response = await Hashtag.insertMany(data);
            return response;
        } catch (error) {
            console.log('Something went wrong in repo layer');
            throw error;
        }
    }

    async get(id){
        try {
            const response = await Hashtag.findById(id);
            return response;
        } catch (error) {
            console.log('Something went wromg in repo layer');
            throw error;
        }
    }

    async getByName(data){
        try {
            const response = await Hashtag.find({
                title: data
            });
            return response;
        } catch (error) {
            
        }
    }
    async delete(id){
        try {
            const response = await Hashtag.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log('Something went wromg in repo layer');
            throw error;
        }
    }
};

export default HashTagRepository;