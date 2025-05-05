import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/database.js';
import apiRoutes from './routes/index.js';
// import UserRepository from './repository/user-repository.js';
// import LikeService from './services/like-service.js';
// import TweetRepository from './repository/tweet-repo.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', apiRoutes);
app.listen(3000, async () => {
    console.log("Server is listning");
    await connectDB();
    // const likeService = new LikeService();
    // const tweetRepository = new TweetRepository();
    // const tweet = await tweetRepository.getAll();
    // const user = new UserRepository();
    // await user.create({
    //     email:'himnais1@gmail.com',
    //     password:'12345566',
    //     name:'hiimanshu'
    // })
    // const response = await user.getAll();
    // const check =  await likeService.toggleLike(tweet[0].id, 'Tweets', response[2]._id);
});