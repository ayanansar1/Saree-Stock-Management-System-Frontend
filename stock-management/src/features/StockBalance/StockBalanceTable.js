// features/StockBalance/StockBalanceTable.jsx
import React from 'react';
// import '../assets/styles/stockBalanceTable.css';

const StockBalanceTable = ({ data }) => {
  return (
    <table className="stock-balance-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Warehouse</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.product}</td>
            <td>{item.warehouse}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockBalanceTable;