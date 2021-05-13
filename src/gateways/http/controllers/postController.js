const { Router } = require('express');
const handle = require('express-async-handler');

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
      const { userId } = req.user;
      const post = await ctx.postOperations.create(userId, req.body);
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

  updatePost: async (req, res, next) => {
    try {
      // todo: input validator
      const { postId } = req.params;
      const post = await ctx.postOperations.update(postId, req.body);
      res.status(200).send(post);
    } catch (e) {
      next(e);
    }
  },

  createLikePost: async (req, res, next) => {
    try {
      // todo: input validator
      const { userId } = req.user;
      const { postId } = req.params;
      const post = await ctx.likeOperations.create(userId, postId);
      res.status(200).send(post);
    } catch (e) {
      next(e);
    }
  },

  deleteLikePost: async (req, res, next) => {
    try {
      // todo: input validator
      const { userId } = req.user;
      const { postId } = req.params;
      const post = await ctx.likeOperations.delete(userId, postId);
      res.status(200).send(post);
    } catch (e) {
      next(e);
    }
  },

  getComments: async (req, res, next) => {
    try {
      // todo: input validator
      const { postId } = req.params;
      const comments = await ctx.getPostComments.execute(postId);
      res.status(200).send(comments);
    } catch (e) {
      next(e);
    }
  },

  createComment: async (req, res, next) => {
    try {
      // todo: input validator
      const { userId } = req.user;
      const { postId } = req.params;
      const { content } = req.body;
      const comment = await ctx.commentOperations.create(userId, postId, content);
      res.status(200).send(comment);
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
    router.put('/:postId', this.updatePost);

    router.get('/:postId/comments', this.getComments);
    router.post('/:postId/comments', this.createComment);
    router.use('/comments', handle(ctx.commentController.router));

    router.post('/:postId/like', this.createLikePost);
    router.delete('/:postId/like', this.deleteLikePost);

    return router;
  },
});
