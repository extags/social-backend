module.exports = ({ postService }) => ({
  execute: async (postId) => {
    const comments = postService.getAll(postId);
    return comments;
  },
});
