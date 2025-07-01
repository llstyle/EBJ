import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, ManyToOne} from 'typeorm';
import { Cart } from '../../carts/entities/cart.entity';
import { Product } from 'src/products/entities/product.entity';


@Entity()
export class CartItem{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cart, cart => cart.items)
    cart: Cart;

     @ManyToOne(() => Product)
    product: Product;

    @Column()
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}