import express from 'express';
import {create, deleteTweet, getTweet} from '../../controller/tweet-controller.js'
import {toggleLike} from '../../controller/like-controller.js';
import {createComment} from '../../controller/comment-controller.js'
import userController from '../../controller/user-controler.js';
import {authenticate} from '../../middleware/Authenticate.js'
import connectionController from '../../controller/connection-controller.js';
const router = express.Router();

// user
router.post('/user/create', userController.create);
router.post('/signIn', userController.signIn);
router.get('/user/get/:id', userController.get);
router.delete('/user/delete/:id', userController.deleteUser);
router.get('/user/getAll', userController.getALl);

// tweet creation and deletion
router.post('/create',authenticate,create);
router.get('/tweet/:id', getTweet);
// router.post('/get',create);
router.delete('/delete/:id',deleteTweet);

// like or removeLike on the tweet
router.post('/like/toggle',authenticate, toggleLike);

router.post('/comment',authenticate, createComment);

// connections apis
router.post('/connections/send/:fromUserId/:toUserId/:status', connectionController.sendRequest);
router.post('/connections/review/:connectionId/:userId/:status', connectionController.reviewRequest);
router.get('/connection/following/:userId', connectionController.following);
router.get('/connection/follower/:userId', connectionController.follower);
export default router;