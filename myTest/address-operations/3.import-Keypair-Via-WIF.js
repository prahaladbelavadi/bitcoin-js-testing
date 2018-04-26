var bigi = require('bigi')
var bitcoin = require('../..')
var dhttp = require('dhttp/200')

var wif = 'Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct'

var keyPair = bitcoin.ECPair.fromWIF(wif)
var address = keyPair.getAddress()

console.log("Wallet Interchange format:" + wif + "\n" + "Address:"+ address)
