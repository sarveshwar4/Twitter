import mongoose from "mongoose";
const url = "mongodb+srv://sarveshwarshukla:qxHH1EKOKIUTEIVR@sknode.pgrsp.mongodb.net/TwitterDev";
const connectDB = async()=>{
    await mongoose.connect(url);
}
export default connectDB;