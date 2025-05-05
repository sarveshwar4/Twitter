import CrudRepository from "./crud-repository.js";
import User from "../models/user.js"
class UserRepository extends CrudRepository{
   constructor(){
    super(User);
   }
   async get(data){
      try {
          const response = await User.findById(data);
          return response;
      } catch (error) {
          console.log('Something went wromg in crud layer');
          throw error;
      }
  }
}

export default UserRepository;