const updateVccSchema = {
  type: 'object',
  properties: {
    params: {
      type: 'object',
      required: [
        'fileHash',
      ],
      properties: {
        fileHash: { type: 'string' },
      },
    },
  },
};

module.exports = () => updateVccSchema;
