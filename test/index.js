// import { assert } from 'chai';
const chai = require('chai');

const { assert } = chai;

const DigiWallet = require('../lib');
// import DigiWallet from "../src";

const options = {
  appId: 'dw_example_sdk_1.0.11',
  returnUrl: 'http://www.test.nl/success',
  reportUrl: 'http://www.test.nl/report',
  cancelUrl: 'http://www.test.nl/cancel',
  test: 1,
};

const DW = new DigiWallet(options);
const Sofort = DW.sofort();

Sofort.country = 'DE';
Sofort.amount = 1000;
Sofort.description = 'test desc';
Sofort.outletId = 143835;

describe('Sofort payment', () => {
  it('should test start Sofort payment', () => {
    assert(Sofort.appId === 'dw_example_sdk_1.0.11', 'app id is changed');
    Sofort.start().then((data) => {
      assert(data.status === true, `Sofort payment is failed: ${data.error}`);
      Sofort.check().then((checkData) => {
        assert(checkData.status === false, `Sofort payment is failed: ${checkData.error}`);
      });
    });
  });
});


const Ideal = DW.ideal();

Ideal.country = 'DE';
Ideal.amount = 1000;
Ideal.description = 'test desc';
Ideal.bank = 'RABONL2U';
Ideal.outletId = 143835;

describe('Ideal', () => {
  it('should test start Sofort payment', () => {
    assert(Ideal.appId === 'dw_example_sdk_1.0.11', 'app id is changed');
    Ideal.start().then((data) => {
      assert(data.status === true, `Ideal payment is failed: ${data.error}`);
      Ideal.check().then((checkData) => {
        assert(checkData.status === false, `Ideal payment is failed: ${checkData.error}`);
      });
    });
  });
});
