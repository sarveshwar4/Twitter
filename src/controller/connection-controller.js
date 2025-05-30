import { ConnectionService } from "../services/index.js";

const connectService = new ConnectionService();

const sendRequest = async (req, res) => {
  try {
    const { fromUserId, toUserId, status } = req.params;
    const response = await connectService.sendRequest(
      fromUserId,
      toUserId,
      status
    );
    return res.status(201).json({
      data: response,
      message: "request is sended successfully",
      success: true,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "Something went wrong",
      success: false,
      error: {
        message: error.message,
        name: error.name,
      },
    });
  }
};

const reviewRequest = async(req, res)=>{
  try{
    const {userId, connectionId, status} = req.params;
    console.log(userId, connectionId, status)
    const response = await connectService.acceptOrBlockRequest(connectionId, userId, status);
    return res.status(200).json({
      data:response,
      success:true,
      message:`request is ${response.status} successfully`,
      err:{},
    });
  }catch(error){
      return res.status(500).json({
      data:{},
      success:true,
      message:"Something went wrong",
      err:error.message
    });
  }
}
export default {
  sendRequest,
  reviewRequest
};

