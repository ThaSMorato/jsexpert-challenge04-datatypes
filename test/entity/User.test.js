import { expect, describe, it, jest, beforeEach } from "@jest/globals";
import User from "../../src/entity/User.js";

let user = {};
const id = "anUserId-123";

describe("#Users entity", () => {
  beforeAll(() => {
    user = new User({ id });
  });

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it("should return a string with User-user.id", () => {
    expect(String(user)).toBe(`User-${id}`);
  });
});
