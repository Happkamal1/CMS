import React, { useState } from "react";

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      setCurrentPassword(newPassword);
      setNewPassword("");
      setConfirmPassword("");
      setPasswordUpdated(true);
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Change Password</h2>
        <p className="text-gray-600 mt-4 text-lg">Change your account password securely.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Current Password</h3>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="Enter current password"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">New Password</h3>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="Enter new password"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Confirm New Password</h3>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
          placeholder="Confirm new password"
        />
        <button
          onClick={handlePasswordChange}
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Change Password
        </button>
        {passwordUpdated && (
          <div className="mt-4 text-green-500 font-semibold">
            Password updated successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Password;
