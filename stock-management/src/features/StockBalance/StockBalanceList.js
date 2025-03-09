// features/StockBalance/StockBalanceList.jsx
import React from 'react';
// import '../assets/styles/stockBalanceList.css';
import StockBalanceTable from './StockBalanceTable';

const StockBalanceList = () => {
  const stockData = [
    { id: 1, product: 'Product X', warehouse: 'Warehouse A', quantity: 150 },
    { id: 2, product: 'Product Y', warehouse: 'Warehouse B', quantity: 75 }
  ];

  return (
    <div className="stock-balance-list">
      <h2>Stock Balance</h2>
      <StockBalanceTable data={stockData} />
    </div>
  );
};

export default StockBalanceList;