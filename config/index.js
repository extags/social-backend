const path = require('path');
require('dotenv').config({ path: path.resolve(path.join(__dirname, '..', `.env.${process.env.NODE_ENV}`)) });

module.exports = {
  xls: {
    discountFactor: parseFloat(process.env.DISCOUNT_FACTOR) || 0.989,
    tab: parseInt(process.env.XLS_TAB) || 2,
    columns: convertColumns(process.env.XLS_COLUMNS) || [2, 3, 23, 9, 25, 26, 27],
  },
  blockChain: {
    connectionEndpoint: process.env.BLOCKCHAIN_CONNECTION_ENDPOINT,
    accountMnemonic: process.env.BLOCKCHAIN_ACCOUNT_MNEMONIC,
    factoryAddress: process.env.BLOCKCHAIN_FACTORY_CONTRACT,
  },
  database: {
    connectionString: process.env.COSMOSDB_CONNECTION_STRING,
  },
  keycloak: {
    baseUrl: process.env.KEYCLOAK_BASE_URL,
    realm: process.env.KEYCLOAK_REALM,
    clientId: process.env.KEYCLOAK_CLIENT_ID,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
    publicKey: process.env.KEYCLOAK_PUBLIC_KEY,
  },
};

function convertColumns(columns) {
  if (!columns) return false;
  const array = columns.split(' ');
  return array.map((item) => parseInt(item));
}
