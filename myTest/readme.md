Disclaimer:
Examples to be used as reference.
Many examples employ deterministic seeds, hashes and other entities that would otherwise be random or different in real usage.
Use discretion whereever necessary.


### Index

1. [Address operations:](./address-operations)
	* [Generate Address](./1.genAddress.js)
	* [Generate Address from a SHA256 Hash](./2.genAddress-fromSHA256-Hash.js)
	* [Import Keypair (Private Key) using WIF](./3.import-Keypair-Via-WIF.js)
	* [2-3 Multisignature P2SH (Pay-to-Script Hash)](./4.2-3-multisig-p2sh-address.js)
	* [Generate Litecoin address](./genLiteAddress.js)
	* [Generate Testnet address](./genTestnetaddres.js)
  
2. BIP 32 (Bitcoin Improvement Proposal 32)](./)
  - Export
3. 

  - Todo:
  - need to add segwit stuff
  - need to change directory from where dependency modules are imported
  - continue from [here](https://github.com/bitcoinjs/bitcoinjs-lib/blob/5b0ccb6f68ed9189dc3e382d78e108046974910f/test/integration/addresses.js#L50)

2. transactions:
  - generate transaction, convert to hex and keep ready for broadcast to bitcoin network
  - Generate broadcast ready bitcoin 2-2 multisig transaction

  - Todo:
  - can add input and output prompts later
  - Write documentation for individual understanding
  - continue from [here](https://github.com/bitcoinjs/bitcoinjs-lib/blob/5b0ccb6f68ed9189dc3e382d78e108046974910f/test/integration/transactions.js#L45)


*Problems encountered*
- 3rd create and broadcast transaction not working
  - refuses to log hex digest
  - does not execute complete script
  - breaks somewhere after printing the addresses but before the transaction builder


**References:**
- broadcast transaction to mining pools [here](https://blockchain.info/pushtx)
- decode a transaction [here](https://blockchain.info/decode-tx)
