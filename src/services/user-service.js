import { UserRepository } from "../repository/index.js";
import User from "../models/user.js";
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async create(data) {
    try {
      const response = await this.userRepository.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw error;
    }
  }

  async getByEmail(email) {
    try {
        console.log("hello",email)
      const response = await this.userRepository.getByEmail(email);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw error;
    }
  }
  async get(id) {
    try {
      const response = await this.userRepository.get(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await this.userRepository.delete(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.userRepository.getAll();
      return response;
    } catch (error) {
      console.log("Something went wromg in crud layer");
      throw error;
    }
  }
  async signIn(data) {
    try {
      const user = await this.getByEmail(data.email);
      if (!user) {
        throw new Error("Invalid Credentials");
      }
      const isValidatePassword = await user.comparePassword(data.password);
      console.log(isValidatePassword)
      if (!isValidatePassword) {
        throw new Error("Invalid Credentials");
      }
      const token = user.createToken();
      return token;
    } catch (error) {
      console.log("Something went wromg in service layer");
      throw error;
    }
  }
}

export default UserService;
