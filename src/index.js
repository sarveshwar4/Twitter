import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/database.js';
import apiRoutes from './routes/index.js';
import passport from 'passport';
import {passportAuth} from './config/jwt-stratigy.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', apiRoutes);
app.use(passport.initialize());
passportAuth(passport);

app.listen(3000, async () => {
    console.log("Server is listning");
    await connectDB();
   
});