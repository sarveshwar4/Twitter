import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/database.js';
import apiRoutes from './routes/index.js';
import UserRepository from './repository/user-repository.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', apiRoutes);
app.listen(3000, async () => {
    console.log("Server is listning");
    await connectDB();
    // const user = new UserRepository();
    // const response = await user.create({
    //     email:"sarveshwar@admin.com",
    //     password:'123456',
    //     name:'Sarveshwar',
    // });
    // console.log(response);
});