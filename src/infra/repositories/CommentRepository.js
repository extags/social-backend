const Repository = require('./repository/Repository');

class CommentRepository extends Repository {
  constructor(ctx) {
    super({
      ResourceModel: ctx.commentModel,
    });
  }
}

module.exports = CommentRepository;
