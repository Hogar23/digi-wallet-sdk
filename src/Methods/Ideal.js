import axios from 'axios';
import xml2js from 'xml2js';
import Transaction from '../Transaction.js';


export default class Ideal extends Transaction {
  constructor() {
    super();
    this.name = 'iDEAL';
    this.method = 'IDE';
    this.startApi = 'https://transaction.digiwallet.nl/ideal/start';
    this.checkApi = 'https://transaction.digiwallet.nl/ideal/check';
    this.minimumAmount = 84;
    this.maximumAmount = 1000000;
    this.currencies = ['EUR'];
    this.languages = ['nl'];
    this._bank = null;
    this.version = 4;
  }


  get bank() {
    return this._bank;
  }

  set bank(value) {
    this._bank = value.substr(0, 8);
  }

  getAvailableBanks() {
    return new Promise((resolve, reject) => {
      const bankList = [];
      const url = `https://transaction.digiwallet.nl/ideal/getissuers?ver=${encodeURIComponent(this.version)}&format=xml`;

      axios.get(url).then((response) => {
        const rawXml = response.data;
        xml2js.parseStringPromise(rawXml).then((result) => {
          for (const [key, value] of Object.entries(result.issuers.issuer)) {
            const bankName = result.issuers.issuer[key]._;
            const bankCode = result.issuers.issuer[key].$.id;
            bankList.push({ name: bankName, id: bankCode });
          }
          resolve(bankList);
        }).catch((error) => {
          reject(error);
        });
      }).catch((error) => {
        reject(error);
      });
    });
  }

  beforeStart(request) {
    if (this.bank) {
      request.bind('bank', this.bank);
    }
  }
}
