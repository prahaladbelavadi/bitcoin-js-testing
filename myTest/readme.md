Disclaimer:
Examples to be used as reference.
Many examples employ deterministic seeds, hashes and other entities that would otherwise be random or different in real usage.
Use discretion whereever necessary.


### Index

1. [Address operations:](./address-operations/)
	* [Generate Address](./address-operations/1.genAddress.js)
	* [Generate Address from a SHA256 Hash](./address-operations/2.genAddress-fromSHA256-Hash.js)
	* [Import Keypair (Private Key) using WIF](./address-operations/3.import-Keypair-Via-WIF.js)
	* [2-3 Multisignature P2SH (Pay-to-Script Hash)](./address-operations/4.2-3-multisig-p2sh-address.js)
	* [Generate Litecoin address](./address-operations/genLiteAddress.js)
	* [Generate Testnet address](./address-operations/genTestnetaddres.js)
  
	2. BIP 32 (Bitcoin Improvement Proposal 32)](./bip32/)
	* [Export xpriv key as wallet interchange format](./bip32/1.export-xPrivKey-WIF.js)
	* [Export xpriv key as mnemonic](./bip32/2.export-privKey-mnemonic.js)
	* [Export xpubkey of xpriv key derived using mnemonic](./bip32/3.export-xpubKey-mnemonic.js)
	* [Derive BIP 32 Hardened keys from path](./bip32/4.derive-BIP32-hardenedKeys-from-path.js)
	* [Derive BIP 44 hardened keys from path](./bip32/5.derive-BIP44-hardenedKey-from-path.js)
	* [Generate BIP 32 addresses (HD wallets) using BIP 39 (Mnemonic)](./bip32/6.generate-bip32-addresses-usin-BIP39.js)
  
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
