const mongoose = require('mongoose');

const connectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  serverSelectionTimeoutMS: 3000,
};

class MongoProvider {
  constructor({ config, logger }) {
    this.config = config;
    this.logger = logger;
    this.connection = null;
    this.url = '';
    this.mongoose = mongoose;
  }

  async connect() {
    if (this.connection) { return this.connection; }

    const { connectionString } = this.config.database;

    try {
      this.connection = await this.mongoose.connect(connectionString, connectionOptions);
      this.logger.info('Mongodb connection stablished');
    } catch (err) {
      this.logger.error('Error on connect Mongodb', err);
      this.logger.error('Shutting down service...');
      process.exit();
    }
    return this.connection;
  }
}

module.exports = MongoProvider;
