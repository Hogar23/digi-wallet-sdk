const DigiWallet = require('../lib');

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

console.log('<----------------------------------- Start Sofort Payment Method ----------------------------------->');

Sofort.start().then((data) => {
  if (data.status) {
    console.log(data);
    console.log('<----------------------------------- Check Sofort Payment Method ----------------------------------->');
    Sofort.check().then((checkData) => {
      console.log(checkData);
    });
  }
}).catch((err) => {
  console.log(err);
});

// module.exports = {
//   example
// };
