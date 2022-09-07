import messageHandlerRouters from './message.controller';

const message = {
  type: 'object',
  required: ['name', 'message'],
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    message: { type: 'string' },
    userId: { type: 'string' },
  },
};

const messageOpts = {
  schema: {
    body: message,
  },
  handler: messageHandlerRouters.messageRouter,
};

export default {
  messageOpts,
};
