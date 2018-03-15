var assert = require('assert')
var bigi = require('bigi')
var bitcoin = require('../')
var dhttp = require('dhttp/200')

function rng () { return Buffer.from('HelloWorldHelloWorldHelloWorldXD') }

var litecoin = bitcoin.networks.litecoin
var keyPair = bitcoin.ECPair.makeRandom({ network: litecoin, rng: rng })
var wif = keyPair.toWIF()
var address = keyPair.getAddress()

console.log("Litecoin address: " + address)
console.log("Litecoin Wallet interchange format:",wif)
