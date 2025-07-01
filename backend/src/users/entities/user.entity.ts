import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, OneToMany, OneToOne } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { Cart } from '../../carts/entities/cart.entity';
import { Payment } from 'src/payments/entities/payment.entity';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column({ default: 'user' })
    role: 'user' | 'admin' | 'manager'; 

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @OneToMany(() => Order, order => order.user)
    orders: Order[];

    @OneToOne(() => Cart, cart => cart.user)
    cart: Cart;

    @OneToMany(() => Payment, payment => payment.user)
    payments: Payment[];

}