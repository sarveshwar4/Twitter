import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

export const Comment = mongoose.model("Comment", CommentSchema);
