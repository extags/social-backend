const { describe, it, beforeEach } = require('mocha');
const { assert, stub } = require('sinon');

const AuthService = require('../../../src/app/services/AuthService');

describe('App :: Services :: AuthService', () => {
  let service;
  let keycloakProvider;
  let config;
  beforeEach(() => {
    keycloakProvider = {
      kcClient: {
        auth: stub().returns(),
        accessToken: 'token',
        refreshToken: 'token',
      },
    };
    config = {
      keycloak: {
        clientId: 'clientid',
      },
    };
    service = new AuthService({ keycloakProvider, config });
  });
  describe('login', () => {
    it('should log a user', async () => {
      const payload = {
        username: 'username',
        password: 'password',
        grantType: 'password',
      };
      await service.login(payload);
      const { kcClient } = keycloakProvider;
      assert.calledOnce(kcClient.auth);
      const { clientId } = config.keycloak;
      assert.calledWith(kcClient.auth, {
        ...payload,
        clientId,
      });
    });
    it('should return the tokens', async () => {
      const payload = {
        username: 'username',
        password: 'password',
        grantType: 'password',
      };
      const response = await service.login(payload);
      assert.match(response, {
        access_token: 'token',
        refresh_token: 'token',
      });
    });
  });
});
