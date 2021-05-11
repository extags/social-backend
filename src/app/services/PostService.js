class PostService {
  constructor({ postRepository }) {
    this.postRepository = postRepository;
  }

  async getPost(postId) {
    const post = await this.postRepository.get(postId);
    return post;
  }

  async createPost(params) {
    const post = await this.postRepository.create(params);
    return post;
  }

  async deletePost(postId) {
    const post = await this.postRepository.delete(postId);
    return post;
  }
}

module.exports = PostService;
