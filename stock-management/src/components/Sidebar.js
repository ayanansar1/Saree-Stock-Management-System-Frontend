import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/company-logo.png";
import "../assets/styles/sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside (for mobile view)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, isOpen, toggleSidebar]);

  // Close sidebar when an option is clicked (for mobile view)
  const handleOptionClick = () => {
    if (isMobile) {
      toggleSidebar(false);
    }
  };

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar ${isOpen ? "open" : ""}`}
      onMouseEnter={() => !isMobile && toggleSidebar(true)} // Open on hover (Desktop)
      onMouseLeave={() => !isMobile && toggleSidebar(false)} // Close on leave (Desktop)
    >
      {/* Back Icon for Mobile View */}
      {isMobile && isOpen && (
        <button className="back-icon" onClick={() => toggleSidebar(false)}>
          ← 
        </button>
      )}

      {/* Sidebar Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="FAS BROTHERS Logo" />
        <h2>FAS BROTHERS</h2>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <Link to="/dashboard" onClick={handleOptionClick}>📊 Dashboard</Link>
          </li>
          <li>
            <Link to="/users" onClick={handleOptionClick}>👥 Users</Link>
          </li>
          <li>
            <Link to="/sellers" onClick={handleOptionClick}>🏪 Sellers</Link>
          </li>
          <li>
            <Link to="/products" onClick={handleOptionClick}>📦 Products</Link>
          </li>
          <li>
            <Link to="/stock-balance" onClick={handleOptionClick}>📊 Stock Balance</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;