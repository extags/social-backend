module.exports = ({ logger }) => (err, req, res, next) => {
  if (!err) next();
  logger.error(err.message);
  const { statusCode, message, details } = err;
  const msg = details || message;
  return res.status(statusCode || 500).send({ message: msg });
};
