import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/styles/sellerList.css";
import sellerService from "../../services/sellerService";
import SellerTable from "./SellerTable";

const SellerList = () => {
  const [sellers, setSellers] = useState([]);
  const [filteredSellers, setFilteredSellers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchSellers();
  }, []);

  const fetchSellers = async () => {
    setLoading(true);
    try {
      const response = await sellerService.getSellers();
      setSellers(response.data);
      setFilteredSellers(response.data);
    } catch (error) {
      console.error("Error fetching sellers:", error);
      toast.error("Failed to fetch sellers!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (seller) => {
    navigate(`/sellers/edit/${seller.sellerId}`);
  };

  const handleDelete = async (sellerId) => {
    if (window.confirm("Are you sure you want to delete this seller?")) {
      try {
        await sellerService.deleteSeller(sellerId);
        toast.success("Seller deleted successfully!");
        fetchSellers();
      } catch (error) {
        console.error("Error deleting seller:", error);
        toast.error("Failed to delete seller!");
      }
    }
  };

  // Search filtering
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredSellers(
      sellers.filter((seller) =>
        seller.name.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div className="seller-list-container">
      <div className="seller-header">
      <div className="header-left-group">
        <h3>Seller Management</h3>
        <input
          type="text"
          placeholder="Search sellers..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        
        <button className="add-seller-btn" onClick={() => navigate("/sellers/add")}>
          + Add Seller
        </button>
      </div>
      </div>
      {loading ? (
        <p>Loading sellers...</p>
      ) : (
        <SellerTable sellers={filteredSellers} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default SellerList;
