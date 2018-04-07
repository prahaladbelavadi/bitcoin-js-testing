// can export a BIP32 xpub


var assert = require('assert')
var bip39 = require('bip39')
var bitcoin = require('../../')

var mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost'
console.log("Mnemonic:",mnemonic);
var seed = bip39.mnemonicToSeed(mnemonic)
console.log("Seed:",seed.toString("hex"));
var node = bitcoin.HDNode.fromSeedBuffer(seed)
console.log("XprivKey:", node.toBase58());
var string = node.neutered().toBase58()
console.log("Xpubkey:",string);
console.log("Bitcoin Address:",node.getAddress());
