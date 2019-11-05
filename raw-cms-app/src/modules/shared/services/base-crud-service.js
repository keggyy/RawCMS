import { apiClient } from '../../core/api/api-client.js';
import { ICrudService } from './crud-service.js';

export class BaseCrudService extends ICrudService {
  _apiClient;
  _basePath;

  constructor({ basePath }) {
    super();
    this._apiClient = apiClient;
    this._basePath = basePath;
  }

  async getAll() {
    throw new Error('To be implemented.');
  }

  async getPage({ page = 0 } = {}) {
    // FIXME: Handle pagination (maybe in api client?)
    const res = await this._apiClient.get(this._basePath);
    return res.data.data.items;
  }

  async getById() {
    throw new Error('To be implemented.');
  }

  async create() {
    throw new Error('To be implemented.');
  }

  async update() {
    throw new Error('To be implemented.');
  }

  async delete(id) {
    if (!id) {
      console.error(`Unable to delete item: given id is invalid (${id})`);
      return;
    }

    const res = await this._apiClient.delete(`${this._basePath}/${id}`);
    return res.data.data === true;
  }
}
