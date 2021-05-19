module.exports = ({ postService }) => ({
  get: async (postId) => {
    const post = postService.getPost(postId);
    return post;
  },

  create: async (userId, params) => {
    const post = postService.createPost(userId, params);
    return post;
  },

  delete: async (postId) => {
    const post = postService.deletePost(postId);
    return post;
  },

  update: async (postId, params) => {
    const post = postService.updatePost(postId, params);
    return post;
  },
});
