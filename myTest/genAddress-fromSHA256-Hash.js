var assert = require('assert')
var bigi = require('bigi')
var bitcoin = require('../')
var dhttp = require('dhttp/200')


var str = "correct horse battery staple"
var hash = bitcoin.crypto.sha256(Buffer.from(str))
var d = bigi.fromBuffer(hash)
console.log("String:"+ str+ "\n" +"Hash:" + hash.toString('hex') + "\n" +"Address:" + d)
console.log(bitcoin.crypto.sha256("correct horse battery staple"))
