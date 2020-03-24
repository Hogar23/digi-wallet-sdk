import Sofort from './Methods/Sofort.js';
import Paysafecard from './Methods/Paysafecard.js';
import Afterpay from './Methods/Afterpay.js';
import Bancontact from './Methods/Bancontact.js';
import Creditcard from './Methods/Creditcard.js';
import Ideal from './Methods/Ideal.js';
import Paypal from './Methods/Paypal.js';

export default class DigiWallet {
  constructor(options) {
    this.outletId = options.outletId;
    this.returnUrl = options.returnUrl;
    this.reportUrl = options.reportUrl;
    this.cancelUrl = options.cancelUrl;
    this.test = options.test;
  }

  sofort() {
    const sofort = new Sofort();
    sofort.outletId = this.outletId;
    sofort.returnUrl = this.returnUrl;
    sofort.cancelUrl = this.cancelUrl;
    sofort.test = this.test;

    return sofort;
  }

  paysafecard() {
    const paysafecard = new Paysafecard();
    paysafecard.outletId = this.outletId;
    paysafecard.returnUrl = this.returnUrl;
    paysafecard.cancelUrl = this.cancelUrl;
    paysafecard.test = this.test;

    return paysafecard;
  }

  afterpay() {
    const afterpay = new Afterpay();
    afterpay.outletId = this.outletId;
    afterpay.returnUrl = this.returnUrl;
    afterpay.cancelUrl = this.cancelUrl;
    afterpay.test = this.test;

    return afterpay;
  }

  bancontact() {
    const bancontact = new Bancontact();
    bancontact.outletId = this.outletId;
    bancontact.returnUrl = this.returnUrl;
    bancontact.cancelUrl = this.cancelUrl;
    bancontact.test = this.test;

    return bancontact;
  }

  creditcard() {
    const creditcard = new Creditcard();
    creditcard.outletId = this.outletId;
    creditcard.returnUrl = this.returnUrl;
    creditcard.cancelUrl = this.cancelUrl;
    creditcard.test = this.test;

    return creditcard;
  }

  ideal() {
    const ideal = new Ideal();
    ideal.outletId = this.outletId;
    ideal.returnUrl = this.returnUrl;
    ideal.cancelUrl = this.cancelUrl;
    ideal.test = this.test;

    return ideal;
  }

  paypal() {
    const paypal = new Paypal();
    paypal.outletId = this.outletId;
    paypal.returnUrl = this.returnUrl;
    paypal.cancelUrl = this.cancelUrl;
    paypal.test = this.test;

    return paypal;
  }
}
