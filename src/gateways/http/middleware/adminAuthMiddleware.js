module.exports = ({ authService, config }) => ({
  execute: async (req, res, next) => {
    try {
      await authService.login({
        username: 'admin',
        password: 'Pa55w0rd',
        grantType: 'password',
      });
      next();
    } catch (e) {
      next(e);
    }
  },
});
