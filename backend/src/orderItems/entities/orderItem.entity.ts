import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  order: Order;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @Column()
  quantity: number;

  @Column('decimal')
  unitPrice: number;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
