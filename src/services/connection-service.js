import { ConnectionRepository } from "../repository/index.js";
import { UserRepository } from "../repository/index.js";
class ConnectionService {
  constructor() {
    this.connectionRepository = new ConnectionRepository();
    this.userRepository = new UserRepository();
  }

  async sendRequest(fromUserId, toUserId, status) {
    try {
      const isValidUser = await this.userRepository.get(toUserId);
      if (!isValidUser) throw new Error("Recipient user (toUserId) does not exist.");
      const aleradyConnected = await this.connectionRepository.checkIsAleradyPresent(fromUserId, toUserId);
      if(aleradyConnected.length > 0) throw new Error("Connection request already exists or users are already connected.");
      const data = {fromUserId, toUserId, status};
      const response =  await this.connectionRepository.create(data);
      return response;
    } catch (error) {
      console.error("Error in ConnectionService → sendConnectionRequest:", error.message);
      throw error;
    }
  }
}

export default ConnectionService;