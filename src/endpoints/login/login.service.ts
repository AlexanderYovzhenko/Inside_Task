import jwt from 'jsonwebtoken';
import { checkHashPassword } from '../../bcrypt/bcrypt';
import { JWT_SECRET_KEY } from '../../common/config';
import { IUser } from '../../common/types';
import { addUserAdmin, getUserName } from './login.repository';

/**
 * Issues a token for the admin user if the password is correct
 * @param name -first argument name
 * @param password -second argument password
 * @returns token
 */
const signToken = async (name: string, password: string) => {
  const user = await getUserName(name);

  if (!user) {
    return null;
  }

  if (!(await checkHashPassword(password, user))) {
    return null;
  } else {
    const { name } = user;
    const token = jwt.sign({ name }, JWT_SECRET_KEY!, {
      algorithm: 'HS256',
      expiresIn: '1h',
    });

    return token;
  }
};

/**
 * Add user admin in database
 * @param userAdmin -first argument userAdmin
 * @returns void
 */
const addUserServiceAdmin = async (userAdmin: Omit<IUser, 'id'>) =>
  await addUserAdmin(userAdmin);

export { signToken, addUserServiceAdmin };
