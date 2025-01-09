import React from "react";

const AdminFooter = () => {
  return (
    <div>
      <footer className="bg-blue-800 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CMS Control Panel. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default AdminFooter;
