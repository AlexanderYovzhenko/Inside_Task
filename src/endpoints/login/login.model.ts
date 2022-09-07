import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Message from '../messages/message.model';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  password!: string;

  @OneToMany(() => Message, (message: Message) => message.user)
  messages: Message[];
}

export default User;
