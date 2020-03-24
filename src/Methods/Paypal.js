import Transaction from '../Transaction.js';

export default class Paypal extends Transaction {
  constructor() {
    super();
    this.name = 'PayPal';
    this.method = 'PYP';
    this.startApi = 'https://transaction.digiwallet.nl/paypal/start';
    this.checkApi = 'https://transaction.digiwallet.nl/paypal/check';
    this.minimumAmount = 84;
    this.maximumAmount = 1000000;
    this.currencies = ['EUR'];
    this.languages = ['nl'];
    this.version = 2;
  }

  beforeStart(request) {}
}
