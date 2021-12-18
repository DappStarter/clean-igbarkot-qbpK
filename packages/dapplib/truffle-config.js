require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword story recipe maze comic hidden knife army genius'; 
let testAccounts = [
"0x808372feb406d568be467bab00773ed820b9c72753376a06eccb8e0c2bc7b397",
"0xa18f8efd29f877c765d58db12bf0009bd401b9946df61c6016d8c794d8b84ab6",
"0xb8f83f864e94d6d2e4fdb5fa8ae1e4266fcef0b00c7be24794985fe4e6964e7a",
"0xfbcfc6e4388c6ec6d4f40e1e34101ae5cd69a3170f004a94a29bf5baa677f10f",
"0xa932b2dc8af44a5cc8f7ff2d06578d486560b1a5e9d3419a7314456d1ec62569",
"0x87b15bdd90296440813360535a5e00a96bbf204a2fee1e0319389fa5279f7e0f",
"0xdb1f671e0342e13265a549e44ceb7c088c2cdc7a2b1beb0082f994bfb553cba0",
"0xfa3145fa054a77cfed664e980eea2d66ae6126235059e6d2270fbea1486b398d",
"0xa83ba1e87bec5cfcd7b1196ac673d34236dd2508f02415db800b10a9737028fe",
"0xe57286ddb3ff129f77c2495f4d63df009b1be83dda1bd010a14279b8eb752f65"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


