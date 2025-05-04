class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log('Something went wromg in crud layer');
            throw error;
        }
    }
    async get(data){
        try {
            console.log(data)
            const response = await this.model.findOne(data);
            return response;
        } catch (error) {
            console.log('Something went wromg in crud layer');
            throw error;
        }
    }

    async getByName(data){
        try {
            const response = await this.model.find({
                title: data
            });
            return response;
        } catch (error) {
            console.log('Something went wromg in crud layer');
            throw error;
        }
    }

    async getAll(){
        try {
            const response = await this.model.find({});
            return response;
        } catch (error) {
            console.log('Something went wromg in crud layer');
            throw error;
        }
    }
    async delete(id){
        try {
            console.log('here is delete', id)
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log('Something went wromg in crud layer');
            throw error;
        }
    }
}


export default CrudRepository;