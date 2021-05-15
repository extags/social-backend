const JwtHelper = require('../../../app/helpers/JwtHelper');

module.exports = ({ config }) => ({
  execute: async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      const { publicKey } = config.keycloak;
      const decodeToken = await JwtHelper.verifyAccessToken(authorization, publicKey);
      req.user = decodeToken;
      next();
    } catch (e) {
      res.status(401).send('Unauthorized');
    }
  },
});
