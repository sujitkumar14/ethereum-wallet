var ethers  = require('ethers');
var bluebird = require('bluebird');
var web3 = require('../web3/web3');


const gasLimit = 2100;
const gasPrice = parseInt(web3.eth.gasPrice);

module.exports = function(from,to,amount){

    return new bluebird.Promise(function(resolve,reject){

        var amountInWei = parseInt(web3.toWei(amount,'ether'));
        var currentAmount = parseInt(web3.getBalance(from));

        if(amountInWei< (currentAmount + gasPrice*gasLimit)){

            reject("amount is too low");
        }
        else{

            var transaction = {
                nonce: web3.getTransactionCount(from),
                to:to,
                gasLimit: gasLimit,
                gasPrice: ethers.utils.bigNumberify(gasPrice),
                value: utils.parseEther(amountInWei)

            };

            resolve(transaction);

        }
    });
};