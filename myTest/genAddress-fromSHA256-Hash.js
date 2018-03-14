var assert = require('assert')
var bigi = require('bigi')
var bitcoin = require('../')
var dhttp = require('dhttp/200')



var hash = bitcoin.crypto.sha256(Buffer.from('correct horse battery staple'))
var d = bigi.fromBuffer(hash)
console.log(bitcoin.crypto.sha256("correct horse battery staple"))
console.log("Hash:" + hash.toString('hex') + "\n" +"Address:"+ d)
