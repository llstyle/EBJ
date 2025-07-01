import { Entity, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, DeleteDateColumn, ManyToOne, OneToMany} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { CartItem } from '../../cartItems/entities/cartItem.entity';

@Entity()
export class Cart{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.orders)
    @JoinColumn()
    user: User;

    @OneToMany(() => CartItem, item => item.cart)
    items: CartItem[];

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}