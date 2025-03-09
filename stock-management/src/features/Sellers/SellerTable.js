import React from "react";
import "../../assets/styles/sellerTable.css";

const SellerTable = ({ sellers, onEdit, onDelete }) => {
  return (
    <div className="seller-table-container">
      <table className="seller-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>GST No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sellers.length > 0 ? (
            sellers.map((seller, index) => (
              <tr key={index}>
                <td>{seller.sellerId}</td>
                <td>{seller.sellerName}</td>
                <td>{seller.mobileNo}</td>
                <td>{seller.sellerAddress}</td>
                <td>{seller.gstNO}</td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(seller)}>Edit</button>
                  <button className="delete-btn" onClick={() => onDelete(seller.sellerId)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No sellers found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SellerTable;
