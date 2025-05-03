const express = require('express');
const tweetController = require('../../controller/tweet-controller');
const router = express.Router();

router.post('/create',tweetController.create);

module.exports = router;