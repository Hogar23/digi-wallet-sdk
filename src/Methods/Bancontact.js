import Transaction from '../Transaction.js';

export default class Bancontact extends Transaction {
  constructor() {
    super();
    this.name = 'Bancontact/Mister Cash';
    this.method = 'MRC';
    this.startApi = 'https://transaction.digiwallet.nl/mrcash/start';
    this.checkApi = 'https://transaction.digiwallet.nl/mrcash/check';
    this.minimumAmount = 49;
    this.maximumAmount = 500000;
    this.currencies = ['EUR'];
    this.languages = ['nl', 'fr', 'en'];
    this.version = 2;
  }

  beforeStart(request) {}
}
