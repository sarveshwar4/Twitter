import { getTweet, create } from "../../src/controller/tweet-controller";
import { TweetService } from "../../src/services/index.js";
import { mockRequest, mockResponse } from "../mocker.js";
describe('create a tweet', ()=>{
test("writing the test to create the tweet", async () => {
  const req = mockRequest();
  const res = mockResponse();

  const data = {
    content: "sample tweet",
  };
  const spy = jest
    .spyOn(TweetService.prototype, "createTweet")
    .mockResolvedValue({
      ...data,
      createdAt: "21/7/2004",
      updatedAt: "21/7/2004",
    });
  await create(req, res);
  expect(res.json).toHaveBeenCalledWith({
    data: { ...data, createdAt: "21/7/2004", updatedAt: "21/7/2004" },
    success: true,
    message: "Tweet is created Successfully",
    err: {},
  });
});
})

describe('getting the tweet', ()=>{
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
})

