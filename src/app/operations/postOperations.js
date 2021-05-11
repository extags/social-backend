module.exports = ({ postService }) => ({
  get: async (postId) => {
    const post = postService.getPost(postId);
    return post;
  },

  create: async (params) => {
    const post = postService.createPost(params);
    return post;
  },

  delete: async (postId) => {
    const post = postService.deletePost(postId);
    return post;
  },
});
