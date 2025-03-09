// features/Dashboard/Dashboard.jsx
import React from 'react';
// import '../assets/styles/dashboard.css';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="cards">
        <DashboardCard title="Total Users" value="142" />
        <DashboardCard title="Active Products" value="856" />
        <DashboardCard title="Today's Sales" value="$2,450" />
      </div>
    </div>
  );
};

export default Dashboard;