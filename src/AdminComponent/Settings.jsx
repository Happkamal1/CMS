import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleSaveSettings = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Settings</h2>
        <p className="text-gray-600 mt-4 text-lg">Customize your preferences.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Theme</h3>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h3>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationsChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg text-gray-700">Enable notifications</span>
          </label>
        </div>
        <button
          onClick={handleSaveSettings}
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
