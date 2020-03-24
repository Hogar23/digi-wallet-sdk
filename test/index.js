// import { assert } from 'chai';
const chai = require('chai');

const { assert } = chai;

const DigiWallet = require('../lib');
// import DigiWallet from "../src";

const options = {
  outletId: 143835,
  returnUrl: 'http://www.test.nl/success',
  reportUrl: 'http://www.test.nl/report',
  cancelUrl: 'http://www.test.nl/cancel',
  test: 1,
};

// eslint-disable-next-line no-undef
const DW = new DigiWallet(options);
const Sofort = DW.sofort();

Sofort.country = 'DE';
Sofort.amount = 1000;
Sofort.description = 'test desc';

describe('Awesome test.', () => {
  it('should test start Sofort payment', () => {
    Sofort.start().then((data) => {
      assert(data.status === true, `Sofort payment is failed: ${data.error}`);
      Sofort.check().then((checkData) => {
        assert(checkData.status === false, `Sofort payment is failed: ${checkData.error}`);
      });
    });
  });
});
