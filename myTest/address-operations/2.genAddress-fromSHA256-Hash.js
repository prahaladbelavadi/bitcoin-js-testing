var assert = require('assert')
var bigi = require('bigi')
var bitcoin = require('../..')
var dhttp = require('dhttp/200')


// Deterministic one way hash function takes input
var str = "correct horse battery staple"
var hash = bitcoin.crypto.sha256(Buffer.from(str))
var d = bigi.fromBuffer(hash)

// Generator EC pair from the one way hash
var keyPair = new bitcoin.ECPair(d)
var address = keyPair.getAddress()

console.log("String:"+ str+ "\n" +"Hash:" + hash.toString('hex') + "\n" +"Address:" + address)
console.log(bitcoin.crypto.sha256("correct horse battery staple"))
