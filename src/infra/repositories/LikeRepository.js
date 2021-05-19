const Repository = require('./repository/Repository');

class LikeRepository extends Repository {
  constructor(ctx) {
    super({
      ResourceModel: ctx.likeModel,
    });
  }
}

module.exports = LikeRepository;
