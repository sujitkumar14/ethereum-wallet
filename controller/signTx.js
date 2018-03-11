var ethers = require('ethers');
var bluebird =require('bluebird');



module.exports = function(res,res){


    var privateKey = req.body['privateKey'];
    var tx = req.body['tx'];
    var network;

    var wallet = new ethers.Wallet(privateKey);

    if(_config.network === "testnet"){

        network = providers.networks.ropsten;
    }
    else{
        network = providers.networks.mainnet;
    }

    var provider = new providers.getDefaultProvider(network);

    var signedTransaction =  wallet.sign(tx);

    provider.sendTransaction(signedTransaction)
        .then(function(result){
            res.json({'status':true,'tx':result});
        })
        .catch(function(err){
            var responseText = JSON.parse(err.responseText);
            var error = responseText["error"];
            var message = error["message"];
            res.json({'status':false,'err':message});
        });
};