var wallet = require('ethereumjs-wallet');


/*
    function to generate new wallet
    @return {boolean,String,String,String} - status,address,public Key, private Key
 */

module.exports = function(req,res){

    var newWallet = wallet.generate();

    var response = {
        status:true,
        address: '0x'+newWallet.getAddress().toString('hex').toString(),
        publicKey: newWallet.getPublicKey().toString('hex').toString(),
        privateKey: '0x'+newWallet.getPrivateKey().toString('hex').toString()
    };

    res.json(200,response);

};
