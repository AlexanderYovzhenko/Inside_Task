import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import messageSchema from './message.schema';
import statusCode from '../../common/status.code';

/**
 * Listens to messages routes
 * @param app -first argument app(fastify instance)
 * @returns void
 */
const messageRoutes: FastifyPluginAsync = async (app): Promise<void> => {
  app.get('/*', (_: FastifyRequest, reply: FastifyReply) => {
    reply.status(statusCode.NOT_FOUND).send('Not Found URL');
  });

  app.get('/', async (_: FastifyRequest, reply: FastifyReply) => {
    reply.send({ Message: 'Service: is running!' });
  });

  app.post('/messages', messageSchema.messageOpts);
};

export default messageRoutes;
