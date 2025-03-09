import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../../assets/styles/sellerForm.css";
import sellerService from "../../services/sellerService";

const SellerForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [seller, setSeller] = useState({
    sellerName: "",
    mobileNo: "",
    sellerAddress: "",
    gstNO: "",
  });

  useEffect(() => {
    if (isEditMode) {
      sellerService.getSellerById(id)
        .then((response) => {
          if (response.data) {
            setSeller(response.data);
          } else {
            toast.error("Seller not found!");
            navigate("/sellers");
          }
        })
        .catch((error) => {
          console.error("Error fetching seller:", error);
          toast.error("Failed to fetch seller data.");
        });
    }
  }, [id, isEditMode, navigate]);

  const handleChange = (e) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await sellerService.updateSeller(id, seller);
        toast.success("Seller updated successfully!");
      } else {
        await sellerService.createSeller(seller);
        toast.success("Seller added successfully!");
      }
      setTimeout(() => navigate("/sellers"), 1000);
    } catch (error) {
      toast.error("Error saving seller!");
      console.error("Error saving seller:", error);
    }
  };

  return (
    <div className="seller-form-container">
      <div className="seller-form-wrapper">
        <h2>{isEditMode ? "Edit Seller" : "Add Seller"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Seller Name:</label>
            <input type="text" name="sellerName" placeholder="Seller Name" value={seller.sellerName} onChange={handleChange} required />
          </div>
          <div>
            <label>Mobile No:</label>
            <input type="text" name="mobileNo" placeholder="Mobile No" value={seller.mobileNo} onChange={handleChange} required />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" name="sellerAddress" placeholder="Address" value={seller.sellerAddress} onChange={handleChange} required />
          </div>
          <div>
            <label>GST No:</label>
            <input type="text" name="gstNO" placeholder="GST NO" value={seller.gstNO} onChange={handleChange} required />
          </div>
          <button type="submit">{isEditMode ? "Update" : "Save"}</button>
          <button type="button" onClick={() => navigate("/sellers")}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default SellerForm;
