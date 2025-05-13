import { getTweet } from "../../src/controller/tweet-controller";
import { TweetService } from "../../src/services/index.js";
import { mockRequest, mockResponse } from "../mocker.js";

test("writing the test for controller to get the tweet", async () => {
  const req = mockRequest();
  const res = mockResponse();

  const tweets = [
    { content: "tweet1" },
    { content: "tweet2" },
    { content: "tweet3" },
  ];
  
  jest.spyOn(TweetService.prototype, "getTweet").mockResolvedValue(tweets);

  await getTweet(req, res);

  expect(res.json).toHaveBeenCalledWith({
    data: tweets,
    success: true,
    message: "Tweet is fetched Successfully",
    err: {},
  });
});
