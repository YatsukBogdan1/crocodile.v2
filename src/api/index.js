// @flow
import axios, { AxiosInstance } from 'axios';
import config from '../config.json';

declare export class APIInstance {
  api: AxiosInstance;
}

export default class API {
	static api: AxiosInstance;

	static init() {
		const api = axios.create({
			baseURL: config.API_URL,
			timeout: 10000
		});
		this.api = api;
	}

  static login(username: string, socketId: string) {
    return this.api.post('/login', {username, socketId});
	}
	
	static getTableMessages(tableId: number) {
		return this.api.get(`/table/${tableId}/messages`);
	}
}
