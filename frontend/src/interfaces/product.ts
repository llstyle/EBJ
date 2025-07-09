import { Category } from "./category";

export interface Product{
    id: number;
    name: string;
    description: string;    
    price: number;
    stock: number;
    category: Category;
    created_at: Date;
    deleted_at: Date;
}