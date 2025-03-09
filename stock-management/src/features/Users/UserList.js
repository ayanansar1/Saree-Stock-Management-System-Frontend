import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/styles/userTable.css";
import userService from "../../services/userService";
import UserTable from "./UserTable";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    userService.getUsers()
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  };

  const handleEdit = (user) => {
    navigate(`/users/edit/${user.userId}`); // ✅ Navigate to edit page with user ID
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await userService.deleteUser(userId); // ✅ Call API to delete user
        toast.success("User deleted successfully!");
        fetchUsers(); // ✅ Refresh user list after deletion
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error("Failed to delete user!");
      }
    }
  };
  

  return (
    <div>
      <h2>User Management</h2>
      
  <button className="add-user-btn" onClick={() => navigate("/users/add")}>
    Add User
  </button>

      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default UserList;
