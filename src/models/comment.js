import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  onModel:{
    type: String,
    required: true,
    enum: ["Tweets", "Comment"],
  },
  userid:{
    type:mongoose.Schema.ObjectId,
    ref:'User'
  },
 likes:[
     {
       type:mongoose.Schema.ObjectId,
       ref:'Like'
     }
   ],
  commentable:{
    type: mongoose.Schema.ObjectId,
       refPath: "onModel",
       required: true,
  },
  comment:[
   {
    type:mongoose.Schema.ObjectId,
    ref:'Comment'
  }
  ],
  isMessagePinned:{
    type:Boolean,
    default:false,
  },
},{ timestamps: true });

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;