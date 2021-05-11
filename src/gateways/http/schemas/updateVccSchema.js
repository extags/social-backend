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
    body: {
      type: 'object',
      properties: {
        cers: { type: 'number' },
        certifier: { type: 'string' },
        date: { type: 'string' },
        endSerialNumber: { type: 'string' },
        presentedTo: { type: 'string' },
        projectId: { type: 'string' },
        reference: { type: 'string' },
        startSerialNumber: { type: 'string' },
      },
    },
  },
};

module.exports = () => updateVccSchema;
