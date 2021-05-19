module.exports = ({ likeService }) => ({
  create: async (userId, postId) => {
    const like = await likeService.createLike(userId, postId);
    return like;
  },

  delete: async (userId, postId) => {
    const like = likeService.deleteLike(userId, postId);
    return like;
  },
});
