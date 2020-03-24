export default class StartResponse {
  constructor(values = null) {
    this.status = null;
    this.url = null;
    this.payinfo = null;
    this.transactionId = null;
    this.error = null;

    if (typeof values !== 'undefined') {
      for (const [key, value] of Object.entries(values)) {
        switch (key) {
          case 'status':
            this.status = value;
            break;
          case 'url':
            this.url = value;
            break;
          case 'payinfo':
            this.payinfo = value;
            break;
          case 'transactionId':
            this.transactionId = value;
            break;
          case 'error':
            this.error = value;
            break;
        }
      }
    }
  }
}

// module.exports = StartResponse;
