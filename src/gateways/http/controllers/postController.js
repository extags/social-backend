const { Router } = require('express');

module.exports = (ctx) => ({
  getPostById: async (req, res, next) => {
    try {
      // todo: input validator
      const { postId } = req.params;
      const post = await ctx.postOperations.get(postId);
      res.status(200).send(post);
    } catch (e) {
      next(e);
    }
  },

  createPost: async (req, res, next) => {
    try {
      // todo: input validator
      const post = await ctx.postOperations.create(req.body);
      res.status(200).send(post);
    } catch (e) {
      next(e);
    }
  },

  deletePost: async (req, res, next) => {
    try {
      // todo: input validator
      const { postId } = req.params;
      const post = await ctx.postOperations.delete(postId);
      res.status(200).send(post);
    } catch (e) {
      next(e);
    }
  },

  get router() {
    const router = Router();

    router.use(ctx.verifyTokenMiddleware.execute);
    router.post('/', this.createPost);
    router.get('/:postId', this.getPostById);
    router.delete('/:postId', this.deletePost);

    return router;
  },
});
