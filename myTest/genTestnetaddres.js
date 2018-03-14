var assert = require('assert')
var bigi = require('bigi')
var bitcoin = require('../')
var dhttp = require('dhttp/200')


function rng () { return Buffer.from('HelloWorldHelloWorldHelloWorldXD') }

var testnet = bitcoin.networks.testnet
    var keyPair = bitcoin.ECPair.makeRandom({ network: testnet, rng: rng })
    var wif = keyPair.toWIF()
    var address = keyPair.getAddress()

console.error("Not a Main-net Address!"+"\n"+"Do not send main net funds")
console.log("WIF for Testnet address: "+wif +'\n'+ "Testnet Address" +address)
