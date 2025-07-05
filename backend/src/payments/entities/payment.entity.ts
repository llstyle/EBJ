import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => User, (user) => user.payments)
  user: User;

  @Column()
  amount: number;

  @Column()
  method: 'credit_card' | 'paypal' | 'bank_transfer';

  @Column()
  status: 'pending' | 'completed' | 'failed';

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
