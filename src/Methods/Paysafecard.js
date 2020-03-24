import Transaction from '../Transaction.js';

export default class Paysafecard extends Transaction {
  constructor() {
    super();
    this.name = 'PaysafeCard';
    this.method = 'PSC';
    this.startApi = 'https://transaction.digiwallet.nl/paysafecard/start';
    this.checkApi = 'https://transaction.digiwallet.nl/paysafecard/check';
    this.minimumAmount = 10;
    this.maximumAmount = 15000;
    this.currencies = ['EUR'];
    this.languages = ['nl'];
    this.version = 2;
  }

  beforeStart(request) {}
}
