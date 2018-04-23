var bip39 = require('bip39')
var bitcoin = require('../../')

var root = bitcoin.HDNode.fromSeedHex('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')

   var child1 = root.derivePath("m/44'/0'/0'/0/0")

   // option 2, manually
   var child1b = root.deriveHardened(44)
     .deriveHardened(0)
     .deriveHardened(0)
     .derive(0)
     .derive(0)

     console.log(child1.getAddress());
     console.log(child1b.getAddress());
