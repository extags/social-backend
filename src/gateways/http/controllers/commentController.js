const { Router } = require('express');

module.exports = (ctx) => ({
  updateComment: async (req, res, next) => {
    try {
      // todo: input validator
      const { commentId } = req.params;
      const { content } = req.body;
      await ctx.commentOperations.update(commentId, content);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  },

  deleteComment: async (req, res, next) => {
    try {
      // todo: input validator
      const { commentId } = req.params;
      const { content } = req.body;
      await ctx.commentOperations.delete(commentId, content);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  },

  get router() {
    const router = Router();

    router.use(ctx.verifyTokenMiddleware.execute);

    router.put('/:commentId', this.updateComment);
    router.delete('/:commentId', this.deleteComment);

    return router;
  },
});
