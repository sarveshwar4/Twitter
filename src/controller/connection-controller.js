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
export default {
  sendRequest,
};
