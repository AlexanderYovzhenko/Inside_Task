interface IUser {
  id?: string;
  name: string;
  password: string;
}

interface IMessage {
  name?: string;
  message: string;
}

export { IUser, IMessage };
