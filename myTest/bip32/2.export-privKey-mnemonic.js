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

var string = node.toBase58()
console.log("Bitcoin HD node from Seed Buffer in Base 58:",string);

var restored = bitcoin.HDNode.fromBase58(string)
console.log("Restored from HDnode:",restored.toBase58());

if (restored.toBase58() == node.toBase58()) {
  console.log("Everything works!");
}else{
  console.error("Something's wrong!");
}
