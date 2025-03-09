// features/Products/ProductForm.jsx
import React, { useState } from 'react';
// import '../assets/styles/productForm.css';

const ProductForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData || { 
    name: '', 
    price: 0, 
    stock: 0 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />
      <input
        type="number"
        placeholder="Stock Quantity"
        value={formData.stock}
        onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
      />
      <button type="submit">Save Product</button>
    </form>
  );
};

export default ProductForm;