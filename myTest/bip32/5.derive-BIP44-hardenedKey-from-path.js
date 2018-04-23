var bip39 = require('bip39')
var bitcoin = require('../../')
// Seed Hex is 128 bits or greater of entropy
var root = bitcoin.HDNode.fromSeedHex('DFC65A91366A4CEC4B93B75843E9D5583982F89F6119D499B3654CA185')
    // Path of child to be derived
    var path = "m/44'/0'/0'/0/0"
   var child1 = root.derivePath(path)

   // manually derive a specific address
   var child1b = root.deriveHardened(44)
     .deriveHardened(0)
     .deriveHardened(0)
     .derive(0)
     .derive(0)

     console.log("Address at path: "+ path + " is "+ child1.getAddress(), "\n");
     console.log("Path Derived Address: "+child1.getAddress());
     console.log("Manually Derived Address: "+child1b.getAddress());
