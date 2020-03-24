import Transaction from '../Transaction.js';

export default class Creditcard extends Transaction {
  constructor() {
    super();
    this.name = 'CreditCard';
    this.code = 'CRC';
    this.startApi = 'https://transaction.digiwallet.nl/creditcard/start';
    this.checkApi = 'https://transaction.digiwallet.nl/creditcard/check';
    this.minimumAmount = 100;
    this.maximumAmount = 1000000;
    this.currencies = ['EUR'];
    this.languages = ['nl'];
    this.version = 3;
  }

  beforeStart(request) {}
}
