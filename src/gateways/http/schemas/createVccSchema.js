const createVccSchema = {
  type: 'object',
  required: [
    'query',
  ],
  properties: {
    query: {
      required: [
        'cers',
        'date',
        'certifier',
        'date',
        'endSerialNumber',
        'startSerialNumber',
        'presentedTo',
        'projectId',
        'reference',
        'ignoreParser',
      ],
      type: 'object',
      properties: {
        cers: { type: 'string' },
        certifier: { type: 'string' },
        date: { type: 'string' },
        endSerialNumber: { type: 'string' },
        startSerialNumber: { type: 'string' },
        presentedTo: { type: 'string' },
        projectId: { type: 'string' },
        reference: { type: 'reference' },
        ignoreParser: { type: 'string' },
      },
    },
  },
};

module.exports = () => createVccSchema;
