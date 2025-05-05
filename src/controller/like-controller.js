import { LikeService } from "../services/index.js";

const likeService = new LikeService();

export const toggleLike = async(req, res)=>{
    try {
        const {modelId, modelName, userId} = req.query;
        const response = await likeService.toggleLike(modelId, modelName, userId);
        return res.status(201).json({
            data:response,
            success:true,
            message:"like/unlike done successfully",
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            data:response,
            success:false,
            message:"like/unlike failed..",
            err:{}
        })
    }
}