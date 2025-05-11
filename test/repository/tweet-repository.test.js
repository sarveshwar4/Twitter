import Tweet from "../../src/models/tweet.js";
import User from "../../src/models/user.js";
import TweetRepository from "../../src/repository/tweet-repo.js";
import UserService from "../../src/services/user-service.js";
jest.mock("../../src/models/tweet.js");

describe("test for creating a tweets", () => {
  test("Should create a new Tweet and Return it", async () => {
    const data = {
      content: "testing Tweet",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data, createdAt: "21/07/2007", updatedAt: "21/07/2007" };
    });
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create(data);
    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
    expect(tweet.createdAt).toBeDefined();
  });

  test("Should not create a Tweet and throw exception", async () => {
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("Something went wrong overhere");
    });
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create().catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Something went wrong overhere");
    });
  });
});

describe("get all tweet tests", () => {
  test("testing limit for get all", async () => {
    const data = {
      content: "testing Tweet",
    };
    const tweetArray = [
      { ...data, createdAt: "21/07/2007", updatedAt: "21/07/2007" },
      { ...data, createdAt: "21/07/2007", updatedAt: "21/07/2007" },
      { ...data, createdAt: "21/07/2007", updatedAt: "21/07/2007" },
    ];
    const findResponse = tweetArray;
    findResponse.skip = jest.fn((offset) => findResponse);
    findResponse.limit = jest.fn((limit) => findResponse.slice(0, limit));

    const spy = jest
      .spyOn(Tweet, "find")
      .mockImplementation(() => findResponse);
    const tweetRepo = new TweetRepository();
    const tweets = await tweetRepo.getAll(2, 0);
    expect(tweets).toHaveLength(2);
  });
});

