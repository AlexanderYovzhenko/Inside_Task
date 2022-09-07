import { FastifyRequest, FastifyReply } from 'fastify';
import messageService from './message.service';
import statusCode from '../../common/status.code';
import Message from './message.model';
import { IMessage } from '../../common/types';

type FastifyRequestMessage = FastifyRequest<{
  Body: IMessage;
  Params: {
    messageId: string;
  };
}>;

/**
 * Get message instance class Message(request.body).
 * Called function addMessage(add new message).
 * Install in reply status code (created) and send in reply new message
 * @param request -first argument request
 * @param reply -second argument reply
 * @returns void
 */
const messageRouter = async (
  request: FastifyRequestMessage,
  reply: FastifyReply
) => {
  const message: IMessage = new Message();
  message.name = request.body.name || '';
  message.message = request.body.message;
  message.userId = request.body.userId;

  const response = await messageService.messageService(message);

  if (Array.isArray(response)) {
    reply.code(statusCode.OK).send(response);
  } else {
    reply.code(statusCode.CREATED).send(response);
  }
};

export default {
  messageRouter,
};
