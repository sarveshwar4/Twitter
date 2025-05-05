import { UserRepository } from "../repository/index.js";

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }
    async create(data){
     try {
        const response = await this.userRepository.create(data);
        return response;
     } catch (error) {
        console.log('Something went wrong in service layer');
        throw error;
     }
    }

    async get(id){
        try {
           const response = await this.userRepository.get(id);
           return response;
        } catch (error) {
           console.log('Something went wrong in service layer');
           throw error;
        }
    }

    async delete(id){
        try {
           const response = await this.userRepository.delete(id);
           return response;
        } catch (error) {
           console.log('Something went wrong in service layer');
           throw error;
        }
    }

    async getAll(){
        try {
            const response = await this.userRepository.getAll();
            return response;
        } catch (error) {
            console.log('Something went wromg in crud layer');
            throw error;
        }
    }
}

export default UserService;