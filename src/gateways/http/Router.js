const express = require('express');
const handle = require('express-async-handler');
const cors = require('cors');
const compression = require('compression');

const ApiRouter = express.Router();

/**
 * @param {Object} ctx - Dependency Injection.
 */
module.exports = (ctx) => {
  ApiRouter
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(compression());

  ApiRouter.use(cors());
  ApiRouter.get('/health-check', (_, res) => res.json({ status: 'UP' }));
  ApiRouter.use('/api-docs', ctx.swaggerMiddleware);

  ApiRouter.use('/users', handle(ctx.userController.router));
  ApiRouter.use('/posts', handle(ctx.postController.router));
  ApiRouter.use('/comments', handle(ctx.commentController.router));

  ApiRouter.use('/*', (_, res) => res.status(404).send({ message: 'Not found' }));

  ApiRouter.use(ctx.requestErrorMiddleware);

  return ApiRouter;
};
