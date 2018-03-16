var assert = require('assert')
var bitcoin = require('../')
var regtestUtils = require('./_regtest')
var regtest = regtestUtils.network

// Random generator
function rng () {
  return Buffer.from('YT8dAtK4d16A3P1z+TpwB2jJ4aFH3g9M1EioIBkLEV4=', 'base64')
}

  var alice1 = bitcoin.ECPair.makeRandom({ network: regtest })
  var alice2 = bitcoin.ECPair.makeRandom({ network: regtest })
  var aliceChange = bitcoin.ECPair.makeRandom({ network: regtest, rng: rng })

  // give Alice 2 unspent outputs
var alice1Address = alice1.getAddress()
var alice2Address = alice2.getAddress()

console.log("Alice 1 Address: "+alice1Address+'\n'+"Alice 2 Address: "+alice2Address)

    regtestUtils.faucet(alice1Address, 5e4, function (err, unspent0) {
      if (err) return (err)

      regtestUtils.faucet(alice2Address, 7e4, function (err, unspent1) {
        if (err) return (err)

        var txb = new bitcoin.TransactionBuilder(regtest)
        txb.addInput(unspent0.txId, unspent0.vout) // alice1 unspent
        txb.addInput(unspent1.txId, unspent1.vout) // alice2 unspent
        txb.addOutput('mwCwTceJvYV27KXBc3NJZys6CjsgsoeHmf', 8e4) // the actual "spend"
        txb.addOutput(aliceChange.getAddress(), 1e4) // Alice's change
        // (in)(4e4 + 2e4) - (out)(1e4 + 3e4) = (fee)2e4 = 20000, this is the miner fee

        console.log(txb)
        // Alice signs each input with the respective private keys
        txb.sign(0, alice1)
        txb.sign(1, alice2)

        // log built transaction
        console.log(txb.build().toHex());

        // build and broadcast our RegTest network
        regtestUtils.broadcast(txb.build().toHex())
        // to build and broadcast to the actual Bitcoin network, see https://github.com/bitcoinjs/bitcoinjs-lib/issues/839
      })

    })
