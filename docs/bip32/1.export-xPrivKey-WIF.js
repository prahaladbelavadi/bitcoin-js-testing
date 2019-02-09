var bip39 = require('bip39')
var bitcoin = require('../../')

// can import a BIP32 testnet xpriv and export to WIF

var xpriv = 'tprv8ZgxMBicQKsPd7Uf69XL1XwhmjHopUGep8GuEiJDZmbQz6o58LninorQAfcKZWARbtRtfnLcJ5MQ2AtHcQJCCRUcMRvmDUjyEmNUWwx8UbK'
var node = bitcoin.HDNode.fromBase58(xpriv, bitcoin.networks.testnet)

var wif = node.keyPair.toWIF()
console.log("Xpriv Key:",xpriv);
console.log("Wallet interchange Format:",wif);
