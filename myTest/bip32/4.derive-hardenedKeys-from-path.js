// can create a BIP32, bitcoin, account 0, external address

var bip39 = require('bip39')
var bitcoin = require('../../')

var path = "m/0'/0/0"
    var root = bitcoin.HDNode.fromSeedHex('DFC65A91366A4CEC4B93B75843E9D5583982F89F6119D499B3654CA185')

    // derive Address from path
    var child1 = root.derivePath(path)

    // manually derive a specific address
    var child1b = root.deriveHardened(0)
      .derive(0)
      .derive(0)

console.log("Address at path: "+ path + " is "+ child1.getAddress(), "\n");
console.log("Path Derived Address: "+child1.getAddress());
console.log("Manually Derived Address: "+child1b.getAddress());
