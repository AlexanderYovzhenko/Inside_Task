import { getRepository } from 'typeorm';
import Message from './message.model';
import { IMessage } from '../../common/types';

/**
 * Returns array current number of messages
 * @param numberMessage -first argument number of message
 * @returns Array messages
 */
const getMessages = async (
  numberMessage: string
): Promise<IMessage[] | undefined> => {
  const messages = await getRepository(Message).find({
    take: +numberMessage,
  });

  return messages;
};

/**
 * Add new message in table(Message)
 * @param newMessage -first argument new message
 * @returns Promise<IMessage>
 */
const addMessage = async (newMessage: IMessage): Promise<IMessage> => {
  console.log(newMessage);

  const message = await getRepository(Message).save(newMessage);

  return message;
};

export default {
  getMessages,
  addMessage,
};
