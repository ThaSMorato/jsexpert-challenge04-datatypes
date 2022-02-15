import Crypto from "../entity/Crypto.js";
import CryptoRepository from "../repository/CryptoRepository.js";

class CryptoService {
  constructor({ repository } = {}) {
    this.repository = repository || new CryptoRepository();
  }

  async *list() {
    // TODO: implementar generator que chama a repository fazendo a paginação
    let page = 0;

    const dataIntoInstance = (data) => new Crypto(data);

    while (true) {
      page += 1;
      const { data } = await this.repository.list(page);

      yield data.map(dataIntoInstance);
    }
  }
}

export default CryptoService;
