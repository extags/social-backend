const { Router } = require('express');

module.exports = (ctx) => ({
  createUser: async (req, res, next) => {
    try {
      // todo: input validator
      const { id } = await ctx.userOperations.create(req.body);
      const data = {
        userId: id,
      };
      res.status(200).send({ data });
    } catch (e) {
      next(e);
    }
  },

  getUser: async (req, res, next) => {
    try {
      // todo: input validator
      const { userId } = req.params;
      const userData = await ctx.userOperations.get(userId);
      res.status(200).send({ data: userData });
    } catch (e) {
      next(e);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      // todo: input validator
      const { userId } = req.params;
      await ctx.userOperations.update(userId, req.body);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      // todo: input validator
      const { userId } = req.params;
      await ctx.userOperations.delete(userId);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  },

  login: async (req, res, next) => {
    // todo: input validator
    try {
      const response = await ctx.authOperations.login(req.body);
      res.status(200).send(response);
    } catch (e) {
      next(e);
    }
  },

  refreshToken: async (req, res, next) => {
    // todo: input validator
    try {
      const { refreshToken } = req.body;
      const response = await ctx.authOperations.refresh(refreshToken);
      res.status(200).send(response);
    } catch (e) {
      next(e);
    }
  },

  getSelfUser: async (req, res, next) => {
    try {
      // todo: input validator
      const { userId } = req.user;
      const userData = await ctx.userOperations.get(userId);
      res.status(200).send({ data: userData });
    } catch (e) {
      next(e);
    }
  },

  updateSelfUser: async (req, res, next) => {
    try {
      // todo: input validator
      const { userId } = req.user;
      await ctx.userOperations.update(userId, req.body);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  },

  deleteSelfUser: async (req, res, next) => {
    try {
      // todo: input validator
      const { userId } = req.user;
      await ctx.userOperations.delete(userId);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  },

  get router() {
    const router = Router();

    router.post('/login', this.login);
    router.post('/refresh-token', this.refreshToken);

    router.use(ctx.adminAuthMiddleware.execute);

    router.post('/', this.createUser);

    router.use(ctx.verifyTokenMiddleware.execute);

    router.get('/self', this.getSelfUser);
    router.put('/self', this.updateSelfUser);
    router.delete('/self', this.deleteSelfUser);

    router.get('/:userId', this.getUser);
    router.put('/:userId', this.updateUser);
    router.delete('/:userId', this.deleteUser);

    return router;
  },
});
