class CommentService {
  constructor({ commentRepository }) {
    this.commentRepository = commentRepository;
  }

  async createComment(user, params) {
    const comment = await this.commentRepository.create({ ...params, user });
    return comment;
  }

  async deleteComment(commentId) {
    const comment = await this.commentRepository.delete(commentId);
    return comment;
  }

  async updateComment(commentId, params) {
    const comment = await this.commentRepository.update(commentId, params);
    return comment;
  }

  async getPostComments(post) {
    const comment = await this.commentRepository.findAll({ post });
    return comment;
  }
}

module.exports = CommentService;
