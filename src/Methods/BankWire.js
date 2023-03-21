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
        if (this.email && this.email.length > 0) {
            const valid = this.validateEmail(this.email);
            if (valid) {
                request.bind('email', this.email);
            } else {
                throw new Error('Email validation failed');
            }
        }
    }
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
// module.exports = Sofort;
