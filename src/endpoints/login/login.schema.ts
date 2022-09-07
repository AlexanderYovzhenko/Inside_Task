import { addLoginRouter } from './login.controller';

const user = {
  type: 'object',
  required: ['name', 'password'],
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    password: { type: 'string' },
  },
};

const loginOpts = {
  schema: {
    body: user,
    response: {
      201: user,
    },
  },
  handler: addLoginRouter,
};

export default {
  loginOpts,
};
