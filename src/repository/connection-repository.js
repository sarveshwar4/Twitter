import CrudRepository from "./crud-repository.js";
import Connection from "../models/connection.js";
class ConnectionRepository extends CrudRepository {
  constructor() {
    super(Connection);
  }
  async getConnectionsData(connectionId, userId) {
    try {
      const response = await Connection.findOne({
        _id: connectionId,
        toUserId: userId,
        status: { $in: ["pending", "accepted"] },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong in repo layer");
      throw error;
    }
  }
  async get(id) {
    try {
      const response = await Connection.findById(id);
      return response;
    } catch (error) {
      console.log("Something went wromg in crud layer");
      throw error;
    }
  }
  async checkIsAleradyPresent(fromUserid, toUserid) {
    try {
      const response = await Connection.find({
        fromUserId: fromUserid,
        toUserId: toUserid,
      });
      console.log("hello ji kaise ho abhi aap", response);
      return response;
    } catch (error) {
      console.log("Something went wromg in crud layer");
      throw error;
    }
  }
}
export default ConnectionRepository;
