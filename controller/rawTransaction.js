var ethers = require('ethers');
var bluebird  = require('bluebird');
var createRawTransaction = require('../helpers/createRawTransaction');
/*
    create a raw transaction
    @body {String,String,Number} from,To,amount(in ethers)
 */


module.exports = function(req,res){


    var body = req.body;
    var from = body['from'];
    var to = body['to'];
    var amount = body['amount'];


    if(!from || !to || !amount){
        res.json(404,{'status':false,'err':'insufficient parameters'});
    }
    else{
        createRawTransaction(from,to,amount)
            .then(function(result){

                res.json(200,{'status':true,'tx':result});
            })
            .catch(function(err){
                res.json(404,{'status':false,'err':err});
            });
    }
};