import React, { useEffect, useState } from 'react';
import { Category } from '../../interfaces/category';
import axios from '../../api/axios';

export default function ProductAdmin() {
  const [openBlock, setOpenBlock] = useState<null | string>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

  const toggleBlock = (block: string) => {
    setOpenBlock((prev) => (prev === block ? null : block));
  };


    useEffect(() => {
        axios
        .get<Category[]>('/categories')
        .then((res) => {
            setCategories(res.data);
            if (res.data.length > 0) {
                setSelectedCategoryId(res.data[0].id);
            }
        })
        .catch((err) => {
            console.error('Error fetching categories:', err);
        });
    }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Product Management</h2>

      <div className="mb-3 border rounded p-3">
        <button className="btn btn-link fw-bold text-success" onClick={() => toggleBlock('create')}>
          {openBlock === 'create' ? '▾' : '▸'} Create Product
        </button>
        {openBlock === 'create' && (
          <div className="mt-3">
            <form>
              <div className="mb-2">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" className="form-control" type="text" />
              </div>
              <div className="mb-2">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea id="description" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="price" className="form-label">Price</label>
                <input id="price" className="form-control" type="number" />
              </div>
              <div className="mb-2">
                <label htmlFor="stock" className="form-label">Stock</label>
                <input id="stock" className="form-control" type="number" />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                  id="category"
                  className="form-select"
                  value={selectedCategoryId}
                  onChange={(e) => setSelectedCategoryId(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn btn-success">Create</button>
            </form>
          </div>
        )}
      </div>

      <div className="mb-3 border rounded p-3">
        <button className="btn btn-link fw-bold" onClick={() => toggleBlock('update')}>
          {openBlock === 'update' ? '▾' : '▸'} Update Product
        </button>
        {openBlock === 'update' && (
          <div className="mt-3">
            <form>
              <div className="mb-2">
                <label htmlFor="productId" className="form-label">Product ID</label>
                <input id="productId" className="form-control" type="text" />
              </div>
              <div className="mb-2">
                <label htmlFor="newName" className="form-label">New Name</label>
                <input id="newName" className="form-control" type="text" />
              </div>
              <div className="mb-2">
                <label htmlFor="newDescription" className="form-label">New Description</label>
                <textarea id="newDescription" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="newPrice" className="form-label">New Price</label>
                <input id="newPrice" className="form-control" type="number" />
              </div>
              <div className="mb-3">
                <label htmlFor="newCategory" className="form-label">New Category</label>
                <select
                  id="newCategory"
                  className="form-select"
                  value={selectedCategoryId}
                  onChange={(e) => setSelectedCategoryId(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn btn-primary">Update</button>
            </form>
          </div>
        )}
      </div>

      <div className="mb-3 border rounded p-3">
        <button className="btn btn-link fw-bold text-danger" onClick={() => toggleBlock('delete')}>
          {openBlock === 'delete' ? '▾' : '▸'} Delete Product
        </button>
        {openBlock === 'delete' && (
          <div className="mt-3">
            <form>
              <div className="mb-2">
                <label htmlFor="deleteProductId" className="form-label">Product ID</label>
                <input id="deleteProductId" className="form-control" type="text" />
              </div>
              <button className="btn btn-danger">Delete</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
