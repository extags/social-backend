class RequestError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = RequestError;
    this.statusCode = statusCode;
  }
}

module.exports = RequestError;
