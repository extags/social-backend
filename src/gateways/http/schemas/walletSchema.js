const walletSchema = {
  type: 'object',
  required: ['data'],
  properties: {
    data: {
      type: 'object',
      properties: {
        emission: {
          type: 'number',
        },
        owner: {
          type: 'string',
        },
        value: {
          type: 'number',
        },
      },
      required: ['emission', 'owner', 'value'],
    },
  },
};
module.exports = () => walletSchema;
