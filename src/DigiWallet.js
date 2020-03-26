import Sofort from './Methods/Sofort.js';
import Paysafecard from './Methods/Paysafecard.js';
import Afterpay from './Methods/Afterpay.js';
import Bancontact from './Methods/Bancontact.js';
import Creditcard from './Methods/Creditcard.js';
import Ideal from './Methods/Ideal.js';
import Paypal from './Methods/Paypal.js';

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
    sofort.returnUrl = this.returnUrl;
    sofort.cancelUrl = this.cancelUrl;
    sofort.appId = this.appId;
    sofort.test = this.test;

    return sofort;
  }

  paysafecard() {
    const paysafecard = new Paysafecard();
    paysafecard.returnUrl = this.returnUrl;
    paysafecard.cancelUrl = this.cancelUrl;
    paysafecard.test = this.test;
    paysafecard.appId = this.appId;

    return paysafecard;
  }

  afterpay() {
    const afterpay = new Afterpay();
    afterpay.returnUrl = this.returnUrl;
    afterpay.cancelUrl = this.cancelUrl;
    afterpay.test = this.test;
    afterpay.appId = this.appId;

    return afterpay;
  }

  bancontact() {
    const bancontact = new Bancontact();
    bancontact.returnUrl = this.returnUrl;
    bancontact.cancelUrl = this.cancelUrl;
    bancontact.test = this.test;
    bancontact.appId = this.appId;

    return bancontact;
  }

  creditcard() {
    const creditcard = new Creditcard();
    creditcard.returnUrl = this.returnUrl;
    creditcard.cancelUrl = this.cancelUrl;
    creditcard.test = this.test;
    creditcard.appId = this.appId;

    return creditcard;
  }


  ideal() {
    const ideal = new Ideal();
    ideal.returnUrl = this.returnUrl;
    ideal.cancelUrl = this.cancelUrl;
    ideal.test = this.test;
    ideal.appId = this.appId;

    return ideal;
  }

  paypal() {
    const paypal = new Paypal();
    paypal.returnUrl = this.returnUrl;
    paypal.cancelUrl = this.cancelUrl;
    paypal.test = this.test;
    paypal.appId = this.appId;

    return paypal;
  }
}
