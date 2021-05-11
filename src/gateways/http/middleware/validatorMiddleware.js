module.exports = ({ validator }) => (schema) => (req, res, next) => {
  if (!schema) return next();
  const input = {
    params: req.params,
    body: req.body,
    query: req.query,
  };
  const inputValidation = validator.validate(input, schema, { allowUnknownAttributes: false });
  if (inputValidation.valid) return next();
  return res.status(400).send({
    code: 400,
    // message: inputValidation.toString(),
    error: inputValidation.errors.map((err) => ({
      field: err.argument,
      message: err.message,
    })),
  });
};
