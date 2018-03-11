var express = require('express');
var router = express.Router();
var createWallet = require('../controller/create');
var createRawTransaction = require('../controller/rawTransaction');
var signTransaction = require('../controller/signTx');
var getBalance = require('../controller/getBalance');



router.post('/create',createWallet);
router.post('/rawTransaction',createRawTransaction);
router.post('/signTx',signTransaction);
router.post('/getBalance/:address',getBalance);


module.exports = router;
