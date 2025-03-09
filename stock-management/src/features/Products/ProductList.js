// features/Products/ProductList.jsx
import React from 'react';
// import '../assets/styles/productList.css';
import ProductTable from './ProductTable';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product X', price: 29.99, stock: 150 },
    { id: 2, name: 'Product Y', price: 49.99, stock: 75 }
  ];

  return (
    <div className="product-list">
      <h2>Product Management</h2>
      <ProductTable data={products} />
    </div>
  );
};

export default ProductList;