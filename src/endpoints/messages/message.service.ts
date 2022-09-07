import messageRepo from './message.repository';
import { IMessage } from '../../common/types';

/**
 * Intermediate function
 * Check message and called current function
 * @param message -first argument message
 * @returns result function(array messages or object message)
 */
const messageService = async (message: IMessage) => {
  const checkMessage = message.message.split(' ');

  if (checkMessage[0].toLowerCase() === 'history') {
    return await messageRepo.getMessages(checkMessage[1]);
  } else {
    return await messageRepo.addMessage(message);
  }
};

export default {
  messageService,
};
