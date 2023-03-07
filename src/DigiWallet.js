import Sofort from './Methods/Sofort.js';
import Paysafecard from './Methods/Paysafecard.js';
import Afterpay from './Methods/Afterpay.js';
import Bancontact from './Methods/Bancontact.js';
import Creditcard from './Methods/Creditcard.js';
import Ideal from './Methods/Ideal.js';
import Paypal from './Methods/Paypal.js';
import BankWire from './Methods/BankWire.js';

export default class DigiWallet {
  constructor(options) {
    this.returnUrl = options.returnUrl;
    this.reportUrl = options.reportUrl;
    this.cancelUrl = options.cancelUrl;
    this.appId = options.appId;
    this.test = options.test;
  }

  sofort() {
    const sofort = new Sofort();
    sofort.reportUrl = this.reportUrl;
    sofort.returnUrl = this.returnUrl;
    sofort.cancelUrl = this.cancelUrl;
    sofort.appId = this.appId;
    sofort.test = this.test;

    return sofort;
  }

  paysafecard() {
    const paysafecard = new Paysafecard();
    paysafecard.reportUrl = this.reportUrl;
    paysafecard.returnUrl = this.returnUrl;
    paysafecard.cancelUrl = this.cancelUrl;
    paysafecard.test = this.test;
    paysafecard.appId = this.appId;

    return paysafecard;
  }

  afterpay() {
    const afterpay = new Afterpay();
    afterpay.reportUrl = this.reportUrl;
    afterpay.returnUrl = this.returnUrl;
    afterpay.cancelUrl = this.cancelUrl;
    afterpay.test = this.test;
    afterpay.appId = this.appId;

    return afterpay;
  }

  bancontact() {
    const bancontact = new Bancontact();
    bancontact.reportUrl = this.reportUrl;
    bancontact.returnUrl = this.returnUrl;
    bancontact.cancelUrl = this.cancelUrl;
    bancontact.test = this.test;
    bancontact.appId = this.appId;

    return bancontact;
  }

  creditcard() {
    const creditcard = new Creditcard();
    creditcard.reportUrl = this.reportUrl;
    creditcard.returnUrl = this.returnUrl;
    creditcard.cancelUrl = this.cancelUrl;
    creditcard.test = this.test;
    creditcard.appId = this.appId;

    return creditcard;
  }


  ideal() {
    const ideal = new Ideal();
    ideal.reportUrl = this.reportUrl;
    ideal.returnUrl = this.returnUrl;
    ideal.cancelUrl = this.cancelUrl;
    ideal.test = this.test;
    ideal.appId = this.appId;

    return ideal;
  }

  bankWire() {
    const bankWire = new BankWire();
    bankWire.reportUrl = this.reportUrl;
    bankWire.returnUrl = this.returnUrl;
    bankWire.cancelUrl = this.cancelUrl;
    bankWire.test = this.test;
    bankWire.appId = this.appId;

    return bankWire;
  }

  paypal() {
    const paypal = new Paypal();
    paypal.reportUrl = this.reportUrl;
    paypal.returnUrl = this.returnUrl;
    paypal.cancelUrl = this.cancelUrl;
    paypal.test = this.test;
    paypal.appId = this.appId;

    return paypal;
  }
}
