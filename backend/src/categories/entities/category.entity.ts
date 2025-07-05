import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  parentCategory: Category;

  @OneToMany(() => Category, (category) => category.parentCategory)
  children: Category[];

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
