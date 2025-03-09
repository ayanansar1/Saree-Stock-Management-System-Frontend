import React from "react";
import { FaBars } from "react-icons/fa";
import "../assets/styles/header.css";
const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars size={24} />
      </button>
    
    </header>
  );
};

export default Header;