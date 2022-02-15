import { expect, describe, it, jest, beforeEach } from "@jest/globals";
import Crypto from "../../src/entity/Crypto.js";
import CryptoService from "../../src/service/CryptoService.js";

import mockedCryptoRepository from "../mock/repository/MockCryptoRepository.js";

let cryptoService = {};
let generator = {};

describe("#CryptoService", () => {
  beforeAll(() => {
    cryptoService = new CryptoService({ repository: mockedCryptoRepository });
    generator = cryptoService.list();
  });

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it("should call repository list with page as 1", async () => {
    await generator.next();

    expect(mockedCryptoRepository.list).toBeCalledTimes(1);
    expect(mockedCryptoRepository.list).toBeCalledWith(1);
  });

  it("should call repository list with page as 2 and the value as an array of instance of crypto", async () => {
    const { value } = await generator.next();

    expect(mockedCryptoRepository.list).toBeCalledTimes(1);
    expect(mockedCryptoRepository.list).toBeCalledWith(2);
    expect(value[0]).toBeInstanceOf(Crypto);
  });
});
