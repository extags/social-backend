class PostService {
  constructor({ postRepository }) {
    this.postRepository = postRepository;
  }

  async getPost(postId) {
    const post = await this.postRepository.get(postId);
    return post;
  }

  async createPost(user, params) {
    const post = await this.postRepository.create({ ...params, user });
    return post;
  }

  async deletePost(postId) {
    const post = await this.postRepository.delete(postId);
    return post;
  }

  async updatePost(postId, params) {
    const post = await this.postRepository.update(postId, params);
    return post;
  }
}

module.exports = PostService;
