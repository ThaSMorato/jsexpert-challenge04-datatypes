import { expect, describe, it, jest, beforeEach } from "@jest/globals";
import User from "../../src/entity/User.js";
import Users from "../../src/entity/Users.js";

let users = {};

describe("#Users entity", () => {
  beforeAll(() => {
    users = new Users();
  });

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it("should start with an empty set of users", () => {
    expect([...users]).toStrictEqual([]);
    expect(users.hasUsers()).toBeFalsy();
  });

  it("should add an user to the set", () => {
    const userToAdd = { id: "anUserId-123" };
    users.add(userToAdd);
    const expected = [new User(userToAdd)];
    expect([...users]).toStrictEqual(expected);
    expect(users.hasUsers()).toBeTruthy();
  });
});
