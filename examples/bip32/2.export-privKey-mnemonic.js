// can export a BIP32 xpriv, then import it


var assert = require('assert')
var bip39 = require('bip39')
var bitcoin = require('../../')

var mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost'
console.log("Mnemonic:",mnemonic);

var seed = bip39.mnemonicToSeed(mnemonic)
console.log("Seed:",seed.toString("Hex"));

var node = bitcoin.HDNode.fromSeedBuffer(seed)
console.log("Obtain xpriv key:",node.toBase58());

console.log("Bitcoin address:",node.getAddress());
// export to wif format
var WIF = node.keyPair.toWIF()

console.log("Xpriv key in WIF format:",WIF);
