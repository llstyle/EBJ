import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { OrderItem } from 'src/orderItems/entities/orderItem.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
