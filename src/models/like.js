import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  onModel: {
    type: String,
    required: true,
    enum: ["Tweet", "Comment"],
  },

  likeable: {
    type: mongoose.Schema.ObjectId,
    refPath: "onModel",
    required: true,
  },

   userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

const Like = mongoose.model("Like", likeSchema);

export default Like;
