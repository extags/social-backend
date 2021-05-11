const { describe, it, beforeEach } = require('mocha');
const { assert, stub } = require('sinon');

const userOperations = require('../../../src/app/operations/authOperations');

describe('App :: Operations :: authOperations', () => {
  let operation;
  let authService;
  beforeEach(() => {
    authService = {
      login: stub().returns({ acessToken: 'uuid', refreshToken: 'uuid' }),
      updateUser: stub().returns(),
    };
    operation = userOperations({ authService });
  });
  describe('#login', () => {
    it('should log a user', async () => {
      const payload = {
        email: 'string',
        password: 'string',
      };
      await operation.login(payload);

      assert.calledOnce(authService.login);
      assert.calledWith(authService.login, {
        username: payload.email,
        password: payload.password,
        grantType: 'password',
      });
    });
  });
  describe('#refesh', () => {
    it('should refresh a token', async () => {
      const refreshToken = 'uuid';
      await operation.refresh(refreshToken);
      assert.calledOnce(authService.login);
      assert.calledWith(authService.login, {
        refreshToken,
        grantType: 'refresh_token',
      });
    });
  });
});
