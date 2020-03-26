# digi-wallet-sdk

> This is NodeJS SDK for [DigiWallet](https://www.digiwallet.nl) payment system. DigiWallet provides the link between payment methods and your application. This SDK provides easy approach and usage of DigiWallet API  

## Instalation

``` bash
$ npm install digi-wallet-sdk
```

For detailed explanation on how things work, check out [DigiWallet API documentation](https://www.digiwallet.nl/en/documentation).

## Supported payment methods

``` bash
# Sofort
# Paysafecard
# Afterpay
# Bancontact
# Creditcard
# Ideal
# Paypal
```

## Example
```js
const options = {
    // appID is ID provided by DigiWallet
    appId: APP_ID,

    // returnUrl is url for redirect after a (successful) payment.
    returnUrl: RETURN_URL,

    // returnUrl is url where the visitor is sent after cancelling the payment
    cancelUrl: CANCEL_URL,

    // reportUrl is called by DigiWallet, after (server-to-server) payment as POST request.
    // Here you can check if the payment was indeed completed and process. 
    reportUrl: REPORT_URL,

    // test option can be 1 `as test mode` or 0 'prod mode'.
    test: 1,
};

// create instance of DigiWallet
const DW = new DigiWallet( options );

// desired payment method
const Sofort = DW.sofort();

// declare additional fields for specific payment (See DigiWallet API doc)
Sofort.country = 'DE';
Sofort.amount=1000;
Sofort.description = 'example description';

// Start with payment. 
// In transactionResponse you will get url for redirecting customer, 
// and you will get transactionId
Sofort.start().then(( transactionResponse ) => {

    if( transactionResponse.status ) {

        //...      
        
        // after you have proper transactionId you can check status of payment
        Sofort.check().then( ( checkData ) => {
            //...
        })

    }

}).catch( (err) => {

    //...

});

```


