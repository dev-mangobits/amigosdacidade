import config from '@/config';

export default class Base {
  static getEndpoint(url) {
    return `${config.API}/rs${url}`;
  }

  static getHeaders() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');

    return headers;
  }

  static async fetch(url, params = {}) {
    params.headers = Base.getHeaders();
    if (params.body && typeof params.body === 'object') {
      params.body = JSON.stringify(params.body);
    }

    return await fetch(Base.getEndpoint(url), params);
  }
}
