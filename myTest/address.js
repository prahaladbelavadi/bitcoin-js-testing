/* global describe, it */

var assert = require('assert')
var bigi = require('bigi')
var bitcoin = require('../')
var dhttp = require('dhttp/200')


// deterministic RNG for testing only
function rng () { return Buffer.from('16134252776797180580576810839293') }

var keyPair = bitcoin.ECPair.makeRandom({ rng: rng })
    var address = keyPair.getAddress()

console.log(keyPair+'\n'+address)
