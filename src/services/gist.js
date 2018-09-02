import Auth from './auth';

class Gist {
  constructor() {
    this.base_url = 'https://api.github.com/'
  }

  _getUrl(url, params = {}) {
    var url = new URL(url);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return url;
  }

  get() {
    return fetch(this._getUrl(`${this.base_url}gists`, {access_token: Auth.token}), {
      method: 'GET'
    }).then(res => res.json());
  }

  create(body) {
    return fetch(this._getUrl(`${this.base_url}gists`, {access_token: Auth.token}), {
      method: 'POST',
      json: true,
      body: JSON.stringify(body)
    }).then(res => res.json());
  }
}

export default new Gist();