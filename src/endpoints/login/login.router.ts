import { FastifyPluginAsync } from 'fastify';
import loginSchema from './login.schema';

/**
 * Listens to login routes
 * @param app -first argument app(fastify instance)
 * @returns void
 */
const loginRoutes: FastifyPluginAsync = async (app): Promise<void> => {
  app.post('/login', loginSchema.loginOpts);
};

export default loginRoutes;
