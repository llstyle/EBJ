import React from 'react';
import { Product } from '../interfaces/product.ts';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">{product.description}</p>
                </div>
                <div>
                    <p className="fw-bold mb-1">Ціна: {product.price} ₴</p>
                    <p className={product.stock > 0 ? 'text-success' : 'text-danger'}>
                        {product.stock > 0 ? `В наявності: ${product.stock}` : 'Немає в наявності'}
                    </p>
                    <button
                        className="btn btn-primary w-100"
                        disabled={product.stock === 0}
                    >
                        Додати в кошик
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
