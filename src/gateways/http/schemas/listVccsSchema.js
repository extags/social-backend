const listVccsSchema = {
  type: 'object',
  properties: {
    query: {
      type: 'object',
      properties: {
        cers: { type: 'number' },
        size: { type: 'number' },
        bookmark: { type: 'string' },
        status: { type: 'string' },
        certifier: { type: 'string' },
        fileHash: { type: 'string' },
        endDate: { type: 'string' },
        endSerialNumber: { type: 'string' },
        startSerialNumber: { type: 'string' },
        presentedTo: { type: 'string' },
        projectId: { type: 'string' },
        reference: { type: 'reference' },
        ignoreParser: { type: 'boolean' },
      },
    },
  },
};

module.exports = () => listVccsSchema;
