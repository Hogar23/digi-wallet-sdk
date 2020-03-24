import axios from 'axios';

export default class Request {
  constructor(url, method = 'GET') {
    this.debug = false;
    this.url = null;
    this.method = method;
    this.parameters = {};
    this.url = url;
  }

  bind(fields, value = null) {
    if (typeof fields === 'object') {
      for (const [key, value] of Object.entries(fields)) {
        this.parameters[key] = value;
      }
    } else {
      this.parameters[fields] = value;
    }
  }

  addQueryString(url) {
    if (!this.parameters) {
      return url;
    }
    // console.log(this.parameters)
    let queryString = '';
    for (const [key, value] of Object.entries(this.parameters)) {
      queryString += `&${key}=${encodeURIComponent(value)}`;
    }

    if (this.debug) {
      console.log(this.parameters);
    }
    return `${url}?${queryString.substring(1)}`;
  }

  execute() {
    return new Promise((resolve, reject) => {
      axios({
        method: this.method,
        url: this.addQueryString(this.url)
      }).then((response) => {
        resolve(response.data);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}
