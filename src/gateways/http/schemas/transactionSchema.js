const transactionSchema = {
  type: 'object',
  properties: {
    params: {
      type: 'object',
      required: [
        'from',
      ],
      properties: {
        from: { type: 'string', format: 'email' },
      },
    },
    body: {
      type: 'object',
      required: [
        'to',
        'quantity',
      ],
      properties: {
        quantity: { type: 'number' },
        to: { type: 'string', format: 'email' },
      },
    },
  },
};

module.exports = () => transactionSchema;
