import React from "react";
import Header from "./AdminHeader";
import Menu from "./AdminMenu";
import Content from "./AdminMain";
import Footer from "./AdminFooter";

const AdminPanel = () => {
  return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <div className="w-1/4 bg-gray-200">
            <Menu />
          </div>
          <div className="w-3/4 bg-gray-100 p-6">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default AdminPanel;
