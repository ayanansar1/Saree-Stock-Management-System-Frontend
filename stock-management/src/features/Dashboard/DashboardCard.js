// features/Dashboard/DashboardCard.jsx
import React from 'react';
// import '../assets/styles/dashboardCard.css';

const DashboardCard = ({ title, value }) => {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default DashboardCard;