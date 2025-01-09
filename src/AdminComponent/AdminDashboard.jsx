import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <div className="Dashboard flex-1 p-2">
        <h1 className="text-3xl font-bold mb-4 my-2 py-2 text-center">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold">Statistics</h2>
            <p className="text-gray-600">Some quick stats here.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <p className="text-gray-600">Details about recent activities.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold">Reports</h2>
            <p className="text-gray-600">Overview of reports.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
