import Fastify, { FastifyInstance } from 'fastify';

import loginRouter from './endpoints/login/login.router';
import messageRouter from './endpoints/messages/message.router';
import { checkToken } from './check-token/check.token';

const app: FastifyInstance = Fastify({
  logger: false,
});

app.addHook('preHandler', checkToken);

app.register(loginRouter);
app.register(messageRouter);

export default app;
