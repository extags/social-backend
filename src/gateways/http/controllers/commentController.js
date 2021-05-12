const { Router } = require('express');

module.exports = (ctx) => ({
  createComment: async (req, res, next) => {
    try {
      // todo: input validator
      const { userId } = req.user;
      const comment = await ctx.commentOperations.create(userId, req.body);
      res.status(200).send(comment);
    } catch (e) {
      next(e);
    }
  },

  updateComment: async (req, res, next) => {
    try {
      // todo: input validator
      const { commentId } = req.params;
      await ctx.commentOperations.update(commentId, req.body);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  },

  deleteComment: async (req, res, next) => {
    try {
      // todo: input validator
      const { commentId } = req.params;
      await ctx.commentOperations.delete(commentId);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  },

  get router() {
    const router = Router();

    router.use(ctx.verifyTokenMiddleware.execute);

    router.post('/', this.createComment);
    router.put('/:commentId', this.updateComment);
    router.delete('/:commentId', this.deleteComment);

    return router;
  },
});
