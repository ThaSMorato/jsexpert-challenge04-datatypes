import mockedApiResponse from "../api/response.js";
import { jest } from "@jest/globals";

const list = jest.fn();

list.mockResolvedValue({ data: mockedApiResponse });

export default {
  list,
};
