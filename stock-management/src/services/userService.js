import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/users";

const userService = {
  getUsers: () => axios.get(API_BASE_URL),
  getUserById: (id) => axios.get(`${API_BASE_URL}/${id}`),
  createUser: (userData) => axios.post(API_BASE_URL, userData),
  updateUser: (id, userData) => axios.put(`${API_BASE_URL}/${id}`, userData),
  deleteUser: (id) => axios.delete(`${API_BASE_URL}/${id}`)
};

export default userService;
