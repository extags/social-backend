const JWT = require('jsonwebtoken');

module.exports = {
  verifyAccessToken: async (authorization, publicKey) => new Promise((resolve, reject) => {
    const bearerToken = authorization.split(' ');
    const token = bearerToken[1];
    JWT.verify(token, publicKey, (err, payload) => {
      if (err) {
        return reject(err.name);
      }
      return resolve(payload);
    });
  }),
};
