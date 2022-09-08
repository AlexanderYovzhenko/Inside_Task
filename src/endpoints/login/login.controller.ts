import { FastifyRequest, FastifyReply } from 'fastify';
import statusCode from '../../common/status.code';
import { IUser } from '../../common/types';
import { addUserServiceAdmin, signToken } from './login.service';
import { setHashPassword } from '../../bcrypt/bcrypt';
import { getUserName } from './login.repository';

type FastifyRequestLogin = FastifyRequest<{
  Body: IUser;
  Params: {
    name: string;
    password: string;
  };
}>;

/**
 * Adds an admin user and gives a token
 * @param request -first argument request
 * @param reply -second argument response
 * @returns void
 */
const addLoginRouter = async (
  request: FastifyRequestLogin,
  reply: FastifyReply
) => {
  await addUserServiceAdmin({
    name: 'admin',
    password: await setHashPassword('admin'),
  });
  const { name, password } = request.body;
  const token = await signToken(name, password);

  if (!token) {
    console.error('Wrong login/password combination!');
    reply
      .status(statusCode.FORBIDDEN)
      .send({ error: 'Wrong login/password combination!' });
  } else {
    reply.status(statusCode.OK).send({ token });
  }
};

/**
 * get user admin
 * @param request -first argument request
 * @param reply -second argument response
 * @returns void
 */
const getUser = async (request: FastifyRequestLogin, reply: FastifyReply) => {
  await addUserServiceAdmin({
    name: 'admin',
    password: await setHashPassword('admin'),
  });
  const userAdmin = await getUserName('admin');
  reply.status(statusCode.OK).send({ userAdmin });
};

export { addLoginRouter, getUser };
