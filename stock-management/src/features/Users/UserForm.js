import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../../assets/styles/userForm.css";
import userService from "../../services/userService";

const machineTypes = ["POWERLOOM", "PICKNPICK"];
const jacquardTypes = ["ELECTRONIC", "MANUAL"];

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    userName: "",
    userMobileNo: "",
    userGmailId: "",
    userAddress: "",
    userMachineType: "",
    userJacquardType: "",
    userJacquardChowkNo: "",
  });

  useEffect(() => {
    if (isEditMode) {
      userService.getUserById(id)
        .then((response) => {
          if (response.data) {
            setFormData(response.data);
          } else {
            toast.error("User not found!");
            navigate("/users");
          }
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          toast.error("Failed to fetch user data.");
        });
    }
  }, [id, isEditMode, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await userService.updateUser(id, formData);
        toast.success("User updated successfully!");
      } else {
        await userService.createUser(formData);
        toast.success("User added successfully!");
      }
      setTimeout(() => navigate("/users"), 1000);
    } catch (error) {
      toast.error("Error saving user!");
      console.error("Error saving user:", error);
    }
  };

 return (
    <div className="user-form-container">
        <div className="user-form-wrapper">
            <h2>{isEditMode ? "Edit User" : "Add User"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Name:</label>
                    <input type="text" name="userName" placeholder="Name" value={formData.userName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Mobile No:</label>
                    <input type="text" name="userMobileNo" placeholder="Mobile" value={formData.userMobileNo} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email Id:</label>
                    <input type="email" name="userGmailId" placeholder="Email" value={formData.userGmailId} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="userAddress" placeholder="Address" value={formData.userAddress} onChange={handleChange} required />
                </div>
                <div>
                    <label>Machine Types:</label>
                    <select name="userMachineType" value={formData.userMachineType} onChange={handleChange} required>
                        <option value="">Select Machine Type</option>
                        {machineTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Jacquard Types:</label>
                    <select name="userJacquardType" value={formData.userJacquardType} onChange={handleChange} required>
                        <option value="">Select Jacquard Type</option>
                        {jacquardTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Chowk NO:</label>
                    <input type="number" name="userJacquardChowkNo" placeholder="Chowk No" value={formData.userJacquardChowkNo} onChange={handleChange} />
                </div>
                <button type="submit">{isEditMode ? "Update" : "Save"}</button>
                <button type="button" onClick={() => navigate("/users")}>Cancel</button>
            </form>
        </div>
    </div>
);
};
export default UserForm;
