var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider(_config.web3ConnectionUrl));


module.exports  = web3;