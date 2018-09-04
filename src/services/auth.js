class Auth {
  constructor () {
    this.code = '';
    this.token = sessionStorage.token;
  }

  login () {
    if (process.env.PORT) {
      window.open(`http://${location.hostname}:${process.env.PORT}/auth/google`, '_self');
    } else {
      window.open(`http://${location.hostname}/auth/google`, '_self');
    }
  }

  getProfile () {
    return fetch('/api/profile').then(res => res.json());
  }
}

export default new Auth();
