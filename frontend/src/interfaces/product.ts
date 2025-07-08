export interface Product{
    id: number;
    name: string;
    description: string;    
    price: number;
    stock: number;
    created_at: Date;
    deleted_at: Date;
}