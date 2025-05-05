import express from 'express';
import {create, deleteTweet} from '../../controller/tweet-controller.js'
import {toggleLike} from '../../controller/like-controller.js';
import userController from '../../controller/user-controler.js';
const router = express.Router();

// user
router.post('/user/create', userController.create);
router.delete('/user/delete/:id', userController.deleteUser);
router.get('/user/getAll', userController.getALl);
router.get('/user/get/:id', userController.get);

// tweet creation and deletion
router.post('/create',create);
router.delete('/delete/:id',deleteTweet);

// like or removeLike on the tweet
router.post('/like/toggle', toggleLike);
export default router;