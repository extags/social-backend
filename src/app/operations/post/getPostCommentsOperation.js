module.exports = ({ commentService }) => ({
  execute: async (postId) => {
    const comments = commentService.getPostComments(postId);
    return comments;
  },
});
