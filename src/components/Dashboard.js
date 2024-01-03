// Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
      {user ? (
        <p>Welcome, {user.email}!</p>
      ) : (
        <p>Please login to access the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
