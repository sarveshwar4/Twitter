import { CommentService } from "../services/index.js";
const commentService = new CommentService();
export const createComment = async (req, res) => {
  try {
    const response = await commentService.createCommment(
      req.query.modelType,
      req.query.modelId,
      req.user._id,
      req.body.content
    );
    return res.status(201).json({
        data:response,
        success:true,
        message:'comment is posted successfully',
        err:{},
    });
  } catch (error) {
    return res.status(500).json({
        data:{},
        success:false,
        message:'Something went wrong',
        err:error,
    });
  }
};
