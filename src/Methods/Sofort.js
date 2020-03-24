import Transaction from '../Transaction.js';

export default class Sofort extends Transaction {
  constructor() {
    super();
    this.name = 'Sofort Banking';
    this.method = 'SOF';
    this.startApi = 'https://transaction.digiwallet.nl/directebanking/start';
    this.checkApi = 'https://transaction.digiwallet.nl/directebanking/check';
    this.minimumAmount = 10;
    this.maximumAmount = 500000;
    this.languages = ['de', 'en', 'nl'];
    this._country = '';
    this._type = 1;
    this.version = 2;
  }

  set country(country) {
    this._country = country;
    return this;
  }

  get country() {
    return this._country;
  }

  set type(type) {
    this._type = type;
    return this;
  }

  get type() {
    return this._type;
  }

  beforeStart(request) {
    if (!this.country) {
      throw new Error('No country selected for Sofort Banking');
    }
    request.bind('country', this.country);
    request.bind('type', this.type);
  }
}

// module.exports = Sofort;
