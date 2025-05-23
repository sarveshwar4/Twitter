import CrudRepository from "./crud-repository.js";
import User from "../models/user.js";
class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
  async get(id) {
    try {
      const response = await User.findById(id);
      return response;
    } catch (error) {
      console.log("Something went wromg in crud layer");
      throw error;
    }
  }
  async getByEmail(email) {
    try {
        const response = await User.findOne({email : email});
        console.log(response)
        return response;
    } catch (error) {
      console.log("Something went wromg in repo layer");
      throw error;
    }
  }
}

export default UserRepository;
