import React from "react";
import "../../assets/styles/userTable.css";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
            <th>Machine Type</th>
            <th>Jacquard Type</th>
            <th>Chowk No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.userMobileNo}</td>
                <td>{user.userGmailId}</td>
                <td>{user.userAddress}</td>
                <td>{user.userMachineType}</td>
                <td>{user.userJacquardType}</td>
                <td>{user.userJacquardChowkNo}</td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(user)}>Edit</button>
                  <button className="delete-btn" onClick={() => onDelete(user.userId)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
