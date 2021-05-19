const Repository = require('./repository/Repository');

class UserRepository extends Repository {
  constructor(ctx) {
    super({
      ResourceModel: ctx.userModel,
    });
  }
}

module.exports = UserRepository;
