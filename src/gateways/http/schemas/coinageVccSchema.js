const updateVccSchema = {
  type: 'object',
  properties: {
    params: {
      type: 'object',
      required: [
        'fileHash',
        'email',
      ],
      properties: {
        fileHash: { type: 'string' },
        email: { type: 'string', format: 'email' },
      },
    },
  },
};

module.exports = () => updateVccSchema;
