import { ConnectionRepository } from "../repository/index.js";
import { UserRepository } from "../repository/index.js";
class ConnectionService {
  constructor() {
    this.connectionRepository = new ConnectionRepository();
    this.userRepository = new UserRepository();
  }

  async sendRequest(fromUserId, toUserId, status) {
    try {
       if(!['pending', 'ignore'].includes(status)) throw new Error('status is not valid');
      const isValidUser = await this.userRepository.get(toUserId);
      if (!isValidUser)
        throw new Error("Recipient user (toUserId) does not exist.");
      const aleradyConnected =
        await this.connectionRepository.checkIsAleradyPresent(
          fromUserId,
          toUserId
        );
      if (aleradyConnected.length > 0)
        throw new Error(
          "Connection request already exists or users are already connected."
        );
      const data = { fromUserId, toUserId, status };
      const response = await this.connectionRepository.create(data);
      return response;
    } catch (error) {
      console.error(
        "Error in ConnectionService → sendConnectionRequest:",
        error.message
      );
      throw error;
    }
  }
  async acceptOrBlockRequest(connectionId, userId, status) {
    try {
      console.log(status)
      if(!['accepted', 'blocked'].includes(status)) throw new Error('status is not valid');
      const connection = await this.connectionRepository.getConnectionsData(connectionId, userId);
      console.log(connection)
      if (!connection) throw new Error("connection Id is not valid");
      connection.status = status;
      await connection.save();
      return connection;
    } catch (error) {
      console.log('something went wrong in service layer');
      throw error;
    }
  }

  // ckeck who can follow me
  async follower(userId){
    try {
      // fetch those connecction dooc jiska touserid mein hun aur status ya to accept ho ye pending ho
    } catch (error) {
      
    }
  }
  async following(userId){
    // here in the following list fetch those user jiska fromUserId mein hun aur status ya to pending/accept
  }
}

export default ConnectionService;
