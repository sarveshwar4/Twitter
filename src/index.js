const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connectDB = require("./config/database");
const { TweetService } = require("./services/index");
const apiRoutes = require('./routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', apiRoutes);
app.listen(3000, async () => {
    console.log("Server is listning");
    await connectDB();
    const tweetService = new TweetService();
});