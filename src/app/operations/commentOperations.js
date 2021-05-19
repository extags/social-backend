module.exports = ({ commentService }) => ({
  create: async (user, post, content) => {
    const comment = await commentService.createComment(user, { post, content });
    return comment;
  },

  update: async (commentId, content) => {
    const comment = commentService.updateComment(commentId, { content });
    return comment;
  },

  delete: async (commentId) => {
    const comment = commentService.deleteComment(commentId);
    return comment;
  },
});
