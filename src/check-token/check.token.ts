import { FastifyRequest, FastifyReply, FastifyError } from 'fastify';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../common/config';
import statusCode from '../common/status.code';

/**
 * Intermediate function
 * Checks for a valid token
 * @param request -first argument request
 * @param _ -second argument response
 * @returns void
 */
const checkToken = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: (err?: FastifyError) => void
) => {
  const path = request.routerPath;
  const autHeader = request.headers.authorization;

  if (path === '/login' || path === '/') return done();

  if (autHeader === undefined) {
    console.error('Authorization Error!');
    reply
      .status(statusCode.UNAUTHORIZED)
      .send({ error: 'Authorization Error!' });
  } else {
    const [type, token] = autHeader.toString().split('_');

    if (type === 'Bearer' && token) {
      try {
        jwt.verify(token, JWT_SECRET_KEY!);
      } catch (error) {
        console.error('Authorization Error!');
        reply
          .status(statusCode.UNAUTHORIZED)
          .send({ error: 'Authorization Error!' });
      }
    } else {
      console.error('Authorization Error!');
      reply
        .status(statusCode.UNAUTHORIZED)
        .send({ error: 'Authorization Error!' });
    }
  }

  done();
};

export { checkToken };
