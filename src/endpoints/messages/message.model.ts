import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from '../login/login.model';

@Entity()
class Message {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  message!: string;

  @ManyToOne(() => User, (user: User) => user.messages)
  user: User;
}

export default Message;
