interface IUser {
  id?: string;
  name: string;
  password: string;
}

interface IMessage {
  id?: string;
  name?: string;
  message: string;
  userId?: string;
}

export { IUser, IMessage };
