import mongoose from "mongoose";
const connectionSchema = new mongoose.Schema({
  fromUserId: {
    type: String,
    required: true,
  },
  toUserId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "ignore", "accepted", "blocked"],
  }
});
const Connection = mongoose.model('Connection', connectionSchema);

export default Connection;