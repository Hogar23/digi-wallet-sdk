import Transaction from '../Transaction.js';
import StartResponse from '../utils/Response/StartResponse.js';
import CheckResponse from '../utils/Response/CheckResponse.js';

export default class Afterpay extends Transaction {
  constructor() {
    super();
    this.name = 'AfterPay';
    this.method = 'AFP';
    this.startApi = 'https://transaction.digiwallet.nl/afterpay/start';
    this.checkApi = 'https://transaction.digiwallet.nl/afterpay/check';
    this.minimumAmount = 500;
    this.maximumAmount = 1000000;
    this.currencies = ['EUR'];
    this.languages = ['nl', 'en'];
    this._invoiceLines = null;
    this._billingStreet = null;
    this._billingHouseNumber = null;
    this._billingPostalCode = null;
    this._billingCity = null;
    this._billingPersonEmail = null;
    this._billingPersonInitials = null;
    this._billingPersonGender = null;
    this._billingPersonSurname = null;
    this._billingCountryCode = null;
    this._billingPersonLanguageCode = null;
    this._billingPersonBirthDate = null;
    this._billingPersonPhoneNumber = null;
    this._shippingStreet = null;
    this._shippingHouseNumber = null;
    this._shippingPostalCode = null;
    this._shippingCity = null;
    this._shippingPersonEmail = null;
    this._shippingPersonInitials = null;
    this._shippingPersonGender = null;
    this._shippingPersonSurname = null;
    this._shippingCountryCode = null;
    this._shippingPersonLanguageCode = null;
    this._shippingPersonBirthDate = null;
    this._shippingPersonPhoneNumber = null;
    this.version = 1;
  }

  parseStartResponse(httpResponse) {
    if (typeof httpResponse !== 'undefined' && httpResponse.indexOf('000000') === 0) {
      httpResponse = httpResponse.substring(7).split('|');

      this._transactionId = httpResponse[0]; // For immediate reuse of the object
      return new StartResponse({
        status: true,
        transactionId: httpResponse[0],
        url: httpResponse[2]
      });
    }

    return new StartResponse({
      status: false,
      error: httpResponse
    });
  }

  parseCheckResponse(httpResponse) {
    if (httpResponse.indexOf('000000') === 0) {
      const response = httpResponse.substring(7).split('|');
      if (response[2] === 'Captured') {
        return new CheckResponse({
          status: true
        });
      }
      return new CheckResponse({ status: false, error: httpResponse });
    }
    return new CheckResponse({ status: false, error: httpResponse });
  }


  set invoiceLines(value) {
    this._invoiceLines = value;
  }

  set billingStreet(value) {
    this._billingStreet = value;
  }

  set billingHouseNumber(value) {
    this._billingHouseNumber = value;
  }

  set billingPostalCode(value) {
    this._billingPostalCode = value;
  }

  set billingCity(value) {
    this._billingCity = value;
  }

  set billingPersonEmail(value) {
    this._billingPersonEmail = value;
  }

  set billingPersonInitials(value) {
    this._billingPersonInitials = value;
  }

  set billingPersonGender(value) {
    this._billingPersonGender = value;
  }

  set billingPersonSurname(value) {
    this._billingPersonSurname = value;
  }

  set billingCountryCode(value) {
    this._billingCountryCode = value;
  }

  set billingPersonLanguageCode(value) {
    this._billingPersonLanguageCode = value;
  }

  set billingPersonBirthDate(value) {
    this._billingPersonBirthDate = value;
  }

  set billingPersonPhoneNumber(value) {
    this._billingPersonPhoneNumber = value;
  }

  set shippingStreet(value) {
    this._shippingStreet = value;
  }

  set shippingHouseNumber(value) {
    this._shippingHouseNumber = value;
  }

  set shippingPostalCode(value) {
    this._shippingPostalCode = value;
  }

  set shippingCity(value) {
    this._shippingCity = value;
  }

  set shippingPersonEmail(value) {
    this._shippingPersonEmail = value;
  }

  set shippingPersonInitials(value) {
    this._shippingPersonInitials = value;
  }

  set shippingPersonGender(value) {
    this._shippingPersonGender = value;
  }

  set shippingPersonSurname(value) {
    this._shippingPersonSurname = value;
  }

  set shippingCountryCode(value) {
    this._shippingCountryCode = value;
  }

  set shippingPersonLanguageCode(value) {
    this._shippingPersonLanguageCode = value;
  }

  set shippingPersonBirthDate(value) {
    this._shippingPersonBirthDate = value;
  }

  set shippingPersonPhoneNumber(value) {
    this._shippingPersonPhoneNumber = value;
  }


  get invoiceLines() {
    return this._invoiceLines;
  }

  get billingStreet() {
    return this._billingStreet;
  }

  get billingHouseNumber() {
    return this._billingHouseNumber;
  }

  get billingPostalCode() {
    return this._billingPostalCode;
  }

  get billingCity() {
    return this._billingCity;
  }

  get billingPersonEmail() {
    return this._billingPersonEmail;
  }

  get billingPersonInitials() {
    return this._billingPersonInitials;
  }

  get billingPersonGender() {
    return this._billingPersonGender;
  }

  get billingPersonSurname() {
    return this._billingPersonSurname;
  }

  get billingCountryCode() {
    return this._billingCountryCode;
  }

  get billingPersonLanguageCode() {
    return this._billingPersonLanguageCode;
  }

  get billingPersonBirthDate() {
    return this._billingPersonBirthDate;
  }

  get billingPersonPhoneNumber() {
    return this._billingPersonPhoneNumber;
  }

  get shippingStreet() {
    return this._shippingStreet;
  }

  get shippingHouseNumber() {
    return this._shippingHouseNumber;
  }

  get shippingPostalCode() {
    return this._shippingPostalCode;
  }

  get shippingCity() {
    return this._shippingCity;
  }

  get shippingPersonEmail() {
    return this._shippingPersonEmail;
  }

  get shippingPersonInitials() {
    return this._shippingPersonInitials;
  }

  get shippingPersonGender() {
    return this._shippingPersonGender;
  }

  get shippingPersonSurname() {
    return this._shippingPersonSurname;
  }

  get shippingCountryCode() {
    return this._shippingCountryCode;
  }

  get shippingPersonLanguageCode() {
    return this._shippingPersonLanguageCode;
  }

  get shippingPersonBirthDate() {
    return this._shippingPersonBirthDate;
  }

  get shippingPersonPhoneNumber() {
    return this._shippingPersonPhoneNumber;
  }

  beforeStart(request) {
    // console.log('dsadsadsadsad');

    if (this.invoiceLines) {
      request.bind('invoicelines', JSON.stringify(this.invoiceLines));
    }
    if (this.billingStreet) {
      request.bind('billingstreet', this.billingStreet);
    }
    if (this.billingHouseNumber) {
      request.bind('billinghousenumber', this.billingHouseNumber);
    }
    if (this.billingPostalCode) {
      request.bind('billingpostalcode', this.billingPostalCode);
    }
    if (this.billingCity) {
      request.bind('billingcity', this.billingCity);
    }
    if (this.billingPersonEmail) {
      request.bind('billingpersonemail', this.billingPersonEmail);
    }
    if (this.billingPersonInitials) {
      request.bind('billingpersoninitials', this.billingPersonInitials);
    }
    if (this.billingPersonGender) {
      request.bind('billingpersongender', this.billingPersonGender);
    }
    if (this.billingPersonSurname) {
      request.bind('billingpersonsurname', this.billingPersonSurname);
    }
    if (this.billingCountryCode) {
      request.bind('billingcountrycode', this.billingCountryCode);
    }
    if (this.billingPersonLanguageCode) {
      request.bind('billingpersonlanguagecode', this.billingPersonLanguageCode);
    }
    if (this.billingPersonBirthDate) {
      request.bind('billingpersonbirthdate', this.billingPersonBirthDate);
    }
    if (this.billingPersonPhoneNumber) {
      request.bind('billingpersonphonenumber', this.billingPersonPhoneNumber);
    }
    if (this.shippingStreet) {
      request.bind('shippingstreet', this.shippingStreet);
    }
    if (this.shippingHouseNumber) {
      request.bind('shippinghousenumber', this.shippingHouseNumber);
    }
    if (this.shippingPostalCode) {
      request.bind('shippingpostalcode', this.shippingPostalCode);
    }
    if (this.shippingCity) {
      request.bind('shippingcity', this.shippingCity);
    }
    if (this.shippingPersonEmail) {
      request.bind('shippingpersonemail', this.shippingPersonEmail);
    }
    if (this.shippingPersonInitials) {
      request.bind('shippingpersoninitials', this.shippingPersonInitials);
    }
    if (this.shippingPersonGender) {
      request.bind('shippingpersongender', this.shippingPersonGender);
    }
    if (this.shippingPersonSurname) {
      request.bind('shippingpersonsurname', this.shippingPersonSurname);
    }
    if (this.shippingCountryCode) {
      request.bind('shippingcountrycode', this.shippingCountryCode);
    }
    if (this.shippingPersonLanguageCode) {
      request.bind('shippingpersonlanguagecode', this.shippingPersonLanguageCode);
    }
    if (this.shippingPersonBirthDate) {
      request.bind('shippingpersonbirthdate', this.shippingPersonBirthDate);
    }
    if (this.shippingPersonPhoneNumber) {
      request.bind('shippingpersonphonenumber', this.shippingPersonPhoneNumber);
    }
  }
}
