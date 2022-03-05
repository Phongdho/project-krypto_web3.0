// https://eth-ropsten.alchemyapi.io/v2/tlX6JozLuCosM_JRjPW2U9CcYjuCGqPI

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/tlX6JozLuCosM_JRjPW2U9CcYjuCGqPI',
      accounts: ['29b275db9398177cc2328273d134f56eab5c9a249c24cb6cee70e6d5be257911'],
    },
  },
};