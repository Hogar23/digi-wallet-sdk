import Transaction from '../Transaction.js';

export default class BankWire extends Transaction {
    constructor() {
        super();
        this.email = '';
        this.name = 'Bank Wire';
        this.method = 'SOF';
        this.startApi = 'https://transaction.digiwallet.nl/bankwire/start';
        this.checkApi = 'https://transaction.digiwallet.nl/bankwire/check';
        this.minimumAmount = 1;
        this.maximumAmount = 500000;
        this.version = 2;
    }


    beforeStart(request) {
        const valid = this.ValidateEmail(this.email);
        if (valid) {
            request.bind('email', this.email);
        }
    }

    ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            throw new Error('Email validation failed');
        }
        return true;
    }
}
// module.exports = Sofort;
