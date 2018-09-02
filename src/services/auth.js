const AUTH_DETAILS = {
  client_id: '4b2127767323fd379be0',
  client_secret: '4ae262776187d6c4742e41e6ade2604ab59bd63b',
  redirect_uri: 'http://localhost:8080',
  scope: 'gist'
}

class Auth {
  constructor() {
    this.code = '';
    this.token = sessionStorage.token;
  }

  getToken() {
    window.open(`https://github.com/login/oauth/authorize?client_id=${AUTH_DETAILS.client_id}&redirect_uri=${AUTH_DETAILS.redirect_uri}&scope=${AUTH_DETAILS.scope}`, '_self');
  }

  _getUrl(url, params) {
    var url = new URL(url);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return url;
  }

  authenticate() {
    let params = {
      client_id: AUTH_DETAILS.client_id,
      client_secret: AUTH_DETAILS.client_secret,
      code: this.code,
      redirect_uri: AUTH_DETAILS.redirect_uri
    };

    return fetch(this._getUrl('https://github.com/login/oauth/access_token', params), {
      method: 'POST'
    }).then(res => res.text())
    .then(res => {
      let params = res.split('&');

      if (params && params[0] && params[0].split('=')[0] === 'access_token') {
        this.token = params[0].split('=')[1];
        sessionStorage.token = this.token;
      } else {
        throw new Error('Auth failed');
      }
    });
  }
}

export default new Auth();