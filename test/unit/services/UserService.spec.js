const { describe, it, beforeEach } = require('mocha');
const { assert, stub } = require('sinon');

const UserService = require('../../../src/app/services/UserService');

describe('App :: Services :: UserService', () => {
  let service;
  let keycloakProvider;
  beforeEach(() => {
    keycloakProvider = {
      kcClient: {
        users: {
          findOne: stub().returns({ id: 1 }),
          create: stub().returns({ id: 1 }),
          update: stub().returns(),
        },
      },
    };
    service = new UserService({ keycloakProvider });
  });
  describe('getUser', () => {
    it('should get a user', async () => {
      const userId = '123';

      await service.getUser(userId);

      const { kcClient } = keycloakProvider;
      assert.calledOnce(kcClient.users.findOne);
      assert.calledWith(kcClient.users.findOne, {
        id: userId,
      });
    });
  });
  describe('createUser', () => {
    it('should create a user', async () => {
      const payload = {
        email: 'string',
        fullname: 'string',
        nickname: 'string',
        password: 'string',
      };

      await service.createUser(payload);

      const { kcClient } = keycloakProvider;
      assert.calledOnce(kcClient.users.create);
    });
  });
  describe('updateUser', () => {
    it('should create a user', async () => {
      const payload = {
        address: 'string',
        addressNumber: 0,
        birthDate: 'string',
        city: 'string',
        complement: 'string',
        country: 'string',
        document: 'string',
        fullname: 'string',
        genderType: 'string',
        nickname: 'string',
        phone: 'string',
        state: 'string',
      };

      const userId = '123';

      await service.updateUser(userId, payload);

      const { kcClient } = keycloakProvider;
      assert.calledOnce(kcClient.users.update);
    });
  });
});
