var web3 = require('web3');



module.exports = function(req,res){

    var address= req.params['address'];


    var balance = parseInt(web3.getBalance(address).toString());
    var balanceInEther = web3.fromWei(balance,'ether');

    res.json({'status':true,'balance':balanceInEther});

};