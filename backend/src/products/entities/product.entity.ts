import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CartItem } from '../../cartItems/entities/cartItem.entity';
import { Category } from 'src/categories/entities/category.entity';
import { ProductImage } from 'src/productImages/entities/productImage.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  stock: number;

  @OneToMany(() => CartItem, (cartItem) => cartItem.product)
  cartItems: CartItem[];

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => ProductImage, (image) => image.product)
  images: ProductImage[];

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
