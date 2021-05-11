const winston = require('winston');

/**
 * @param {Object} container - Dependency Injection.
 * @param {import('../../../config/index')} container.config
 */
module.exports = () => {
  const defaultMessageFormat = winston.format.printf((msg) => {
    const {
      level, timestamp, message, stack,
    } = msg;

    let log = typeof message === 'object'
      ? JSON.stringify(msg.message)
      : message || msg[Symbol.for('message')];

    if (stack) {
      log = stack;
    }

    return `${timestamp} / ${level}: ${log}`;
  });

  const appFormat = winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp(),
    defaultMessageFormat,
  );

  const options = {
    levels: winston.config.syslog.levels,
    format: winston.format.combine(
      appFormat,
      winston.format.json(),
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          appFormat,
        ),
      }),
    ],
  };

  const logger = winston.createLogger(options);

  logger.stream = {
    write(message) {
      logger.info(message.substring(0, message.lastIndexOf('\n')));
    },
  };

  return logger;
};
