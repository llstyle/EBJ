import { Product } from "./product";

export interface Category {
  id: string;
  name: string;
  parentCategory?: Category | null;
  children?: Category[];
  products?: Product[];
  created_at: Date;
  deleted_at?: Date | null;
}
