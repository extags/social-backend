const express = require('express');
const morgan = require('morgan');
const { scopePerRequest } = require('awilix-express');

class Server {
  /**
  * @param {Object} container - Dependency Injection.
  * @param {import('../../../../config/index')} container.config
  * @param {import('src/interface/http/Router')} container.router
  * @param {import('src/infra/logging/logger')} container.logger
  * @param {import('src/container')} container.container
  */
  constructor({
    config, router, container, logger,
  }) {
    this.config = config;
    this.logger = logger;
    this._setExpress(router, container);
  }

  _setExpress(router, container) {
    this.express = express();
    this.express.use(morgan('combined', { stream: this.logger.stream }));
    this.express.use(router);
    this.express.use(scopePerRequest(container));
  }

  start() {
    const SERVER_PORT = this.config.port || 3000;
    const ENV = process.env.NODE_ENV;

    return this.express.listen(SERVER_PORT, () => {
      this.logger.info(`Server started on port: ${SERVER_PORT} - Environment: ${ENV}`);
    });
  }
}

module.exports = Server;
