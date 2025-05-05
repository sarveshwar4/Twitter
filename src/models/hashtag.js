import mongoose from "mongoose";

const hashTagSchema  = new mongoose.Schema({
   title:{
       type : String,
   },
   tweet:[
     {
        type:mongoose.Schema.ObjectId,
        ref:'Tweets'
     }
   ]
}, { timestamps: true });

const Hashtag = mongoose.model('HashTag', hashTagSchema);

export default Hashtag;