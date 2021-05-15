const Repository = require('./repository/Repository');

class PostRepository extends Repository {
  constructor(ctx) {
    super({
      ResourceModel: ctx.postModel,
    });
    this.userModel = ctx.userModel;
  }

  async findAll() {
    const posts = this.ResourceModel.find();
    await posts.populate({
      path: 'user',
      model: this.userModel,
      select: ['username', 'email'],
    }).exec();
    return posts;
  }
}

module.exports = PostRepository;
