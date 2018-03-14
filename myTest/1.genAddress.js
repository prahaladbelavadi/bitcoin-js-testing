/* global describe, it */

var assert = require('assert')
var bigi = require('bigi')
var bitcoin = require('../')
var dhttp = require('dhttp/200')


// Use a random number generator with 32 characters
// http://numbergenerator.org/random-32-digit-number-generator

// deterministic RNG for testing only
function rng () { return Buffer.from('HelloWorldHelloWorldHelloWorldXD') }

var keyPair = bitcoin.ECPair.makeRandom({ rng: rng })
var address = keyPair.getAddress()
var pubkey = keyPair.pubkey
console.log('PrivateKey in WIF format: '+keyPair.toWIF() +'\n' +'Bitcoin Address:'+address)
