import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required:true
  }
},{ timestamps: true });

userSchema.pre('save', async function(next){
    const user = this;
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);    
});
userSchema.methods.comparePassword = async function(plainPassword){
   try {
    const user = this;
    const isMatch = await bcrypt.compare(plainPassword, user.password); 
    return isMatch;
   } catch (error) {
       throw ('Something went wrong');
   }
},
userSchema.methods.createToken =  function(){
  try {
    const user = this;
    const token = jwt.sign({id: user.id, email:user.email},'TwitterSecret', {expiresIn : '1hr'});
    return token;
  } catch (error) {
    throw ('Something went wrong');
  }
}
const User = mongoose.model("User", userSchema);

export default User
