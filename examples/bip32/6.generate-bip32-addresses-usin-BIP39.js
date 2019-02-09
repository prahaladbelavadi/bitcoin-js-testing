// can use BIP39 to generate BIP32 addresses

    var bip39 = require('bip39')
    var bitcoin = require('../../')

    // var mnemonic = bip39.generateMnemonic()
    var mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost'

    var seed = bip39.mnemonicToSeed(mnemonic)
    var root = bitcoin.HDNode.fromSeedBuffer(seed)

    // receive addresses
    function receiveAddress(path){
      console.log("Path: "+path+"\n"+"Receiving Address: "+root.derivePath(path).getAddress()+"\n");
    }

    // change addresses
    function changeAddress(path){
      console.log("Path: "+path+"\n"+"Change Address: "+root.derivePath(path).getAddress()+"\n");
    }

receiveAddress("m/0'/0/0")
receiveAddress("m/0'/0/1")
changeAddress("m/0'/1/0")
changeAddress("m/0'/1/1")
