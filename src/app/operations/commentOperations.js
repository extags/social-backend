module.exports = ({ commentService }) => ({
  create: async (user, params) => {
    const comment = await commentService.createComment(user, params);
    return comment;
  },

  update: async (commentId, params) => {
    const comment = commentService.updateComment(commentId, params);
    return comment;
  },

  delete: async (commentId) => {
    const comment = commentService.deleteComment(commentId);
    return comment;
  },
});
