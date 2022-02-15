require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name release place hospital inner civil army gentle'; 
let testAccounts = [
"0xfdbd4de5f209aae93952ffc4134aeddd56874ab07e19dc01ee21a271227ac648",
"0xe9ca5beb14489fe920e7c841f4dca80dd38298dbaad38dcb34f9da4b60e1487b",
"0x70dd0fb9c3c4aaa37eeed1c5665677cf432c532a8bc4081c3d0c8aa3704be382",
"0xabab2e1309ca53b176c7d2927401103f1f34f4ba352a43432529974903872e4f",
"0x235e770238a43b777735fc2551aab2c7b670b345d3d63efd2d38ea92bc35e9e2",
"0xa06814693148f8e821a6599f93f8bc595fcbeb35711fe6154e77ebc6b408f7ff",
"0xfe91090049625101dbe588edc289321440ab36c954833d59de6ce213781d5844",
"0x07404e1e458c4ddad50b287293ef5d67283abb8c2a3925ad9721b5733e06c1d8",
"0xcc00b64b7c1ea026bcb6436e99e96b33bb130d41326298adeaae9ef07788b3eb",
"0x8909f452f0f7be99b4c3ad41b9fd432b568dcfd85931aec2a744fc72313de133"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

