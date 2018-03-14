var assert = require('assert')
var bigi = require('bigi')
var bitcoin = require('../')
var dhttp = require('dhttp/200')


var pubKeys = [
     '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
     '02c96db2302d19b43d4c69368babace7854cc84eb9e061cde51cfa77ca4a22b8b9',
     '03c6103b3b83e4a24a0e33a4df246ef11772f9992663db0c35759a5e2ebf68d8e9'
   ].map(function (hex) { return Buffer.from(hex, 'hex') })

   var redeemScript = bitcoin.script.multisig.output.encode(2, pubKeys) // 2 of 3
   var scriptPubKey = bitcoin.script.scriptHash.output.encode(bitcoin.crypto.hash160(redeemScript))
   var address = bitcoin.address.fromOutputScript(scriptPubKey)

console.log(redeemScript)
console.log(scriptPubKey)
console.log("Multisignature Address: " + address);
