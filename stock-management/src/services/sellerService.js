import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/sellers";

const sellerService = {
  getSellers: () => axios.get(API_BASE_URL),
  getSellerById: (id) => axios.get(`${API_BASE_URL}/${id}`),
  createSeller: (sellerData) => axios.post(API_BASE_URL, sellerData),
  updateSeller: (id, sellerData) => axios.put(`${API_BASE_URL}/${id}`, sellerData),
  deleteSeller: (id) => axios.delete(`${API_BASE_URL}/${id}`)
};

export default sellerService;
