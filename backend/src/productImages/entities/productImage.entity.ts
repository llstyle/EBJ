import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  product: Product;

  @Column({ nullable: true })
  alt?: string;

  @Column({ default: false })
  isMain: boolean;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
