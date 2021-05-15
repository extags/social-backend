const Repository = require('./repository/Repository');

class PostRepository extends Repository {
  constructor(ctx) {
    super({
      ResourceModel: ctx.postModel,
    });
    this.userModel = ctx.userModel;
    this.likeModel = ctx.likeModel;
  }

  async findAll() {
    const posts = await this.ResourceModel.aggregate([{
      $lookup: {
        from: this.likeModel.collection.name,
        localField: '_id',
        foreignField: '_id.post',
        as: 'likes',
      },
    },
    {
      $lookup: {
        from: this.userModel.collection.name,
        localField: 'user',
        foreignField: '_id',
        as: 'user',
      },
    }]);
    return posts;
  }
}

module.exports = PostRepository;
