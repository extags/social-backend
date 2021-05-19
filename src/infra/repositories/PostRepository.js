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
    const posts = await this.ResourceModel.aggregate([
      {
        $lookup: {
          from: this.userModel.collection.name,
          localField: 'user',
          foreignField: '_id',
          as: 'user',
        },
      },
      { $unwind: '$user' },
      {
        $project: {
          title: 1,
          content: 1,
          thumbnail: 1,
          user: '$user',
        },
      },
      {
        $lookup: {
          from: this.likeModel.collection.name,
          localField: '_id',
          foreignField: '_id.post',
          as: 'likes',
        },
      },
    ]);
    return posts;
  }
}

module.exports = PostRepository;
