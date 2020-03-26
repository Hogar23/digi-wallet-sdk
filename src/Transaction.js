import md5 from 'md5';
import Request from './utils/Request/Request.js';
import StartResponse from './utils/Response/StartResponse.js';
import CheckResponse from './utils/Response/CheckResponse.js';

export default class Transaction {
  constructor() {
    if (this.beforeStart === undefined) {
      throw new TypeError('Classes extending the Transaction abstract class');
    }

    this.salt = '932kvm8937*#&1nj_aa9873j0a0987';
    this.name = '';
    this.startApi = '';
    this.checkApi = '';
    this.minimumAmount = 84;
    this.maximumAmount = 1000000;
    this.currencies = ['EUR'];
    this.languages = ['NL'];
    this._outletId = '';
    this._language = '';
    this._currency = '';
    this._appId = 'dw_example_sdk_1.0';
    this._amount = 0;
    this._description = '';
    this._returnUrl = '';
    this._cancelUrl = '';
    this._reportUrl = '';
    this._transactionId = '';
    this.version = '';
    this._test = 1;
  }

  start() {
    return new Promise((resolve, reject) => {
      if (!this._amount) {
        reject('No amount given');
      }

      if (this._amount < this.minimumAmount) {
        reject(`Amount is too low: minimum=${this.minimumAmount}`);
      }

      if (this._amount > this.maximumAmount) {
        reject(`Amount is too high: maximum=${this.maximumAmount}`);
      }

      const request = new Request(this.startApi);

      request.bind({
        rtlo: this._outletId,
        amount: this._amount,
        description: this._description,
        reporturl: this._reportUrl,
        returnurl: this._returnUrl,
        cancelurl: this._cancelUrl,
        app_id: this._appId,
        language: this._language ? this._language : this.languages[0],
        lang: this._language ? this._language : this.languages[0],
        currency: this._currency ? this._currency : this.currencies[0],

        // userip: '127.0.0.1',
        // domain: 'https://staging-customer01.chit-chat.site',

        salt: this.salt,
        ver: this.version,
        test: parseInt(this._test)
      });

      this.beforeStart(request);

      request.execute().then((response) => {
        const _response = this.parseStartResponse(response);
        if (!_response.error) {
          resolve(_response);
        } else {
          reject(_response);
        }
      });
    });
  }

  check() {
    return new Promise((resolve, reject) => {
      // Create request object
      const request = new Request(this.checkApi);
      // Fill it up
      request.bind({
        rtlo: this._outletId,
        trxid: this._transactionId,
        checksum: md5(this._transactionId + this._outletId + this.salt),
        test: parseInt(this._test)
      });

      // Run check
      request.execute().then((response) => {
        resolve(this.parseCheckResponse(response));
      }).catch((err) => {
        reject(err);
      });
    });
  }

  parseStartResponse(httpResponse) {
    if (typeof httpResponse !== 'undefined' && httpResponse.indexOf('000000') === 0) {
      httpResponse = httpResponse.substring(7).split('|');

      this._transactionId = httpResponse[0]; // For immediate reuse of the object
      return new StartResponse({
        status: true,
        transactionId: httpResponse[0],
        url: httpResponse[1]
      });
    }

    return new StartResponse({
      status: false,
      error: httpResponse
    });
  }

  parseCheckResponse(httpResponse) {
    if (httpResponse.indexOf('000000') === 0) {
      return new CheckResponse({ status: true });
    }
    return new CheckResponse({ status: false, error: httpResponse });
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (this.currencies.indexOf(value) !== -1) {
      this._currency = value;
    }
  }

  get appId() {
    return this._appId;
  }

  set appId(value) {
    this._appId = value.toLowerCase().replace('/[^a-z\d_]/i', '');
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value.substr(0, 32);
  }

  get language() {
    return this._language;
  }

  set language(value) {
    if (this.languages.indexOf(value) !== -1) {
      this._language = value;
    }
  }

  get returnUrl() {
    return this._returnUrl;
  }

  set returnUrl(value) {
    this._returnUrl = value;
  }

  get cancelUrl() {
    return this._cancelUrl;
  }

  set cancelUrl(value) {
    this._cancelUrl = value;
  }

  get reportUrl() {
    return this._reportUrl;
  }

  set reportUrl(value) {
    this._reportUrl = value;
  }

  get outletId() {
    return this._outletId;
  }

  set outletId(value) {
    this._outletId = value;
  }

  get transactionId() {
    return this._transactionId;
  }

  set transactionId(value) {
    this._transactionId = value.substr(0, 32);
  }

  get test() {
    return this._test;
  }

  set test(value) {
    this._test = value;
  }
}
