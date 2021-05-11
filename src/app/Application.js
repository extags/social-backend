class Application {
  constructor({ server, logger, mongoProvider }) {
    this.server = server;
    this.logger = logger;
    this.mongoProvider = mongoProvider;
  }

  async database() {
    await this.mongoProvider.connect();
  }

  async start() {
    await this.database();
    await this.server.start();
  }
}

module.exports = Application;
