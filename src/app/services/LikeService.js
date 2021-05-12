class LikeService {
  constructor({ likeRepository }) {
    this.likeRepository = likeRepository;
  }

  async createLike(user, post) {
    const like = await this.likeRepository.create({ post, user });
    return like;
  }

  async deleteLike(likeId) {
    const like = await this.likeRepository.findOneAndDelete(likeId);
    return like;
  }
}

module.exports = LikeService;
