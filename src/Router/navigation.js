import React from "react";
import Header from "../header";

const Navigation = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-gray-100 text-gray-800">
      <Header />
      <main className="p-8 max-w-4xl mx-auto">{children}</main>
    </div>
  );
};

export default Navigation;