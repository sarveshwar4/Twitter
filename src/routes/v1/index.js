import express from 'express';
import {create} from '../../controller/tweet-controller.js'
const router = express.Router();

router.post('/create',create);

export default router;