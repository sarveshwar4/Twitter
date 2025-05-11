import UserService from "../../src/services/user-service.js";
import { UserRepository } from "../../src/repository/index.js";
jest.mock("../../src/repository/index.js");
describe("set of test for creating in service", () => {
  test("should be create a user", async () => {
    const data = {
      email: "s@b.com",
      password: "12345",
    };
    UserRepository.prototype.create.mockReturnValue({
      ...data,
      createdAt: "21/07/2007",
      updatedAt: "21/07/2007",
    });
    const userService = new UserService();
    const response = await userService.create();
    expect(response.email).toBe(data.email);
  });
});

describe("signIn method", () => {
    
  test("for signIn the user", async () => {
    const data = {
      email: "s@b.com",
      password: "12345",
    };
    const spy = jest
      .spyOn(UserService.prototype, "getByEmail")
      .mockImplementation(() => {});
    const userService = new UserService();
    await expect(userService.signIn(data)).rejects.toThrow("Invalid Credentials");
  });
  

  test("should throw an error if password is invalid", async () => {
    const data = {
      email: "s@b.com",
      password: "12345",
    };

    
    const mockUser = {
      comparePassword: jest.fn().mockResolvedValue(false),
    };

    const spy = jest
      .spyOn(UserService.prototype, "getByEmail")
      .mockResolvedValue(mockUser);

    const userService = new UserService();

    // Check karo ki signIn me error throw ho raha hai jab password galat ho
    await expect(userService.signIn(data.email, data.password)).rejects.toThrow(
      "Invalid Credentials"
    );

    // Mock ko restore karna test ke baad
    spy.mockRestore();
  });
  test("generating a token", async () => {
    const data = {
      email: "s@b.com",
      password: "12345",
    };
    const mockUser = {
      comparePassword: jest.fn().mockResolvedValue(true),
      createToken: jest.fn().mockResolvedValue("xyz"),
    };

    const spy = jest
      .spyOn(UserService.prototype, "getByEmail")
      .mockResolvedValue(mockUser);
    const userService = new UserService();
    const token = await userService.signIn(data);
    expect(mockUser.createToken).toHaveBeenCalled();
    expect(token).toBe("xyz");
  });
});
