const { describe, it, beforeEach } = require('mocha');
const { assert, stub } = require('sinon');

const userOperations = require('../../../src/app/operations/userOperations');

describe('App :: Operations :: userOperations', () => {
  let operation;
  let userService;
  beforeEach(() => {
    userService = {
      createUser: stub().returns({ id: '123' }),
      getUser: stub().returns({ id: '123' }),
      updateUser: stub().returns(),
    };
    operation = userOperations({ userService });
  });
  describe('#create', () => {
    it('should create a user', async () => {
      const payload = {
        email: 'string',
        fullname: 'string',
        nickname: 'string',
        password: 'string',
      };
      await operation.create(payload);

      assert.calledOnce(userService.createUser);
      assert.calledWith(userService.createUser, payload);
    });
  });
  describe('#get', () => {
    it('should get a user', async () => {
      const userId = '123';
      await operation.get(userId);

      assert.calledOnce(userService.getUser);
      assert.calledWith(userService.getUser, userId);
    });
  });
  describe('#update', () => {
    it('should update a user', async () => {
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

      await operation.update(payload);

      assert.calledOnce(userService.updateUser);
      assert.calledWith(userService.updateUser, payload);
    });
  });
});
