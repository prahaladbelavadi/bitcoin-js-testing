Disclaimer:
Examples to be used as reference.
Many examples employ deterministic seeds, hashes and other entities that would otherwise be random or different in real usage.
Use discretion whereever necessary.


### Index
1. address operations:
  - genaddress
  - genAddressfrom sha256
  - import keypair via WIF
  - 2-3 multisignature pay2 script hash

  - Todo:
  - need to add segwit stuuf
  - need to change directory from where dependency modules are imported
  - continue from [here](https://github.com/bitcoinjs/bitcoinjs-lib/blob/5b0ccb6f68ed9189dc3e382d78e108046974910f/test/integration/addresses.js#L50)

2. transactions:
  - generate transaction, convert to hex and keep ready for broadcast to bitcoin network
  - Generate broadcast ready bitcoin 2-2 multisig transaction

  - Todo:
  - can add input and output prompts later
  - Write documentation for individual understanding
  - continue from



*Problems encountered*
- 3rd create and broadcast transaction not working
  - refuses to log hex digest
  - does not execute complete script
  - breaks somewhere after printing the addresses but before the transaction builder


   [here](https://github.com/bitcoinjs/bitcoinjs-lib/blob/5b0ccb6f68ed9189dc3e382d78e108046974910f/test/integration/transactions.js#L45)
