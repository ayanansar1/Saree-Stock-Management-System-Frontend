import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/global.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./features/Dashboard/Dashboard";
import ProductList from "./features/Products/ProductList";
import SellerForm from "./features/Sellers/SellerForm";
import SellerList from "./features/Sellers/SellerList";
import StockBalanceList from "./features/StockBalance/StockBalanceList";
import UserForm from "./features/Users/UserForm";
import UserList from "./features/Users/UserList";
import useSidebar from "./hooks/useSidebar"; // Import the custom hook
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const { isSidebarOpen, toggleSidebar, isMobile } = useSidebar(); // Use the custom hook

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar to Header */}
      <div className="app-content">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          isMobile={isMobile} // Pass isMobile to Sidebar
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/add" element={<UserForm />} />
            <Route path="/users/edit/:id" element={<UserForm />} />
            <Route path="/sellers" element={<SellerList />} />
            <Route path="/sellers/add" element={<SellerForm />} />
            <Route path="/sellers/edit/:id" element={<SellerForm />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/stock-balance" element={<StockBalanceList />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;