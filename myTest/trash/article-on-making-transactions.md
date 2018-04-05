# Making and broadcasting transactions.

> this article talks about how to sign bitcoin transactions by importing your bitcoin PrivateKey in WIF format.

### Prerequisites:





-----

Steps:
- Run the following command:

  ``node 1.transaction.js``

  it logs the following output

``Transaction to be broadcasted to Bitcoin network in hex format:01000000019d344070eac3fe6e394a16d06d7704a7d5c0a10eb2a2c16bc98842b7cc20d561000000006b48304502210088828c0bdfcdca68d8ae0caeb6ec62cd3fd5f9b2191848edae33feb533df35d302202e0beadd35e17e7f83a733f5277028a9b453d525553e3f5d2d7a7aa8010a81d60121029f50f51d63b345039a290c94bffd3180c99ed659ff6ea6b1242bca47eb93b59fffffffff01e02e0000000000001976a91406afd46bcdfd22ef94ac122aa11f241244a37ecc88ac00000000``

this is a transaction signed with ``Privatekey:L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy``

Since each and every transaction(except a coinbase transaction) must reference a previous unspent transaction output to that address, we shall include the previous transaction's output reference in this  transaction's input.

this signifies this transaction's hex as input which is unspent from the previous transaction's output
```txb.addInput('61d520ccb74288c96bc1a2b20ea1c0d5a704776dd0164a396efec3ea7040349d', 0) // Alice's previous transaction output, has 15000 satoshis
```

We specify this transaction's output. If we're spending this money, to whom are we sending it to ? and how much exactly ?

`txb.addOutput('1cMh228HTCiwS8ZsaakH8A8wze1JR5ZsP', 12000)``



We don't explicitly specify transaction fees.
Any amount in the signed output without a designated outputaddress is taken up by the miner. This implies that in every transaction, all tokens(bitcoins) are spent.

> But what if I have 100 bitcoins and I want to spend only 10 bitcoins ?
> Do I have to spend everything ?

There is a workaround for this.
You can send the bitcoin back to yourself in the return output address or send it to another address to whose private keys you alone control.

It doesn't make much of a differnce to the miner since he processes the transaction as if anyother, where as you still retain control of the ability to spend the remaining bitcoins.
