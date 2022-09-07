import { getRepository } from 'typeorm';
import { IUser } from '../../common/types';
import User from './login.model';

/**
 * Find user admin in database
 * @param name -first argument name of user
 * @returns userAdmin
 */
const getUserName = async (name: string): Promise<IUser | undefined> => {
  const userAdmin = await getRepository(User).findOne({
    where: { name },
  });

  return userAdmin;
};

/**
 * Add user admin in database if user admin not found
 * @param newUserAdmin -first argument newUserAdmin
 * @returns void
 */
const addUserAdmin = async (newUserAdmin: Omit<IUser, 'id'>) => {
  const userAdmin = await getRepository(User).findOne({
    where: { name: newUserAdmin.name },
  });

  if (!userAdmin) {
    await getRepository(User).save(newUserAdmin);

    return;
  }

  return;
};

export { addUserAdmin, getUserName };
