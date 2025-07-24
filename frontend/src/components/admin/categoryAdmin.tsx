import React, { useEffect, useState } from 'react';
import { Category } from '../../interfaces/category';
import axios from '../../api/axios';

export default function CategoryAdmin() {
  const [openBlock, setOpenBlock] = useState<null | string>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  const [categoryName, setCategoryName] = useState('');
  const [selectedParentId, setSelectedParentId] = useState<string>('');

  const [updateCategoryId, setUpdateCategoryId] = useState('');
  const [updateCategoryName, setUpdateCategoryName] = useState('');
  const [updateParentId, setUpdateParentId] = useState<string>('');

  const [deleteCategoryId, setDeleteCategoryId] = useState('');

  const toggleBlock = (block: string) => {
    setOpenBlock((prev) => (prev === block ? null : block));
  };

  useEffect(() => {
    axios
      .get<Category[]>('/categories')
      .then((res) => {
        setCategories(res.data);
        if (res.data.length > 0) {
          setSelectedParentId(res.data[0].id);
          setUpdateParentId(res.data[0].id);
        }
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Category Management</h2>

      <div className="mb-3 border rounded p-3">
        <button className="btn btn-link fw-bold text-success" onClick={() => toggleBlock('create')}>
          {openBlock === 'create' ? '▾' : '▸'} Create Category
        </button>
        {openBlock === 'create' && (
          <div className="mt-3">
            <form>
              <div className="mb-2">
                <label htmlFor="categoryName" className="form-label">Name</label>
                <input
                  id="categoryName"
                  className="form-control"
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="parentCategory" className="form-label">Parent Category</label>
                <select
                  id="parentCategory"
                  className="form-select"
                  value={selectedParentId}
                  onChange={(e) => setSelectedParentId(e.target.value)}
                >
                  <option value="">None</option>
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
          {openBlock === 'update' ? '▾' : '▸'} Update Category
        </button>
        {openBlock === 'update' && (
          <div className="mt-3">
            <form>
              <div className="mb-2">
                <label htmlFor="categoryId" className="form-label">Category ID</label>
                <input
                  id="categoryId"
                  className="form-control"
                  type="text"
                  value={updateCategoryId}
                  onChange={(e) => setUpdateCategoryId(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="newCategoryName" className="form-label">New Name</label>
                <input
                  id="newCategoryName"
                  className="form-control"
                  type="text"
                  value={updateCategoryName}
                  onChange={(e) => setUpdateCategoryName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newParentCategory" className="form-label">New Parent Category</label>
                <select
                  id="newParentCategory"
                  className="form-select"
                  value={updateParentId}
                  onChange={(e) => setUpdateParentId(e.target.value)}
                >
                  <option value="">None</option>
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
          {openBlock === 'delete' ? '▾' : '▸'} Delete Category
        </button>
        {openBlock === 'delete' && (
          <div className="mt-3">
            <form>
              <div className="mb-2">
                <label htmlFor="deleteCategoryId" className="form-label">Category ID</label>
                <input
                  id="deleteCategoryId"
                  className="form-control"
                  type="text"
                  value={deleteCategoryId}
                  onChange={(e) => setDeleteCategoryId(e.target.value)}
                />
              </div>
              <button className="btn btn-danger">Delete</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
