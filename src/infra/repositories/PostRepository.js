const Repository = require('./repository/Repository');

class PostRepository extends Repository {
  constructor(ctx) {
    super({
      ResourceModel: ctx.postModel,
    });
  }
}

module.exports = PostRepository;
