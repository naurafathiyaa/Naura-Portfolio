import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const linkClasses = (path) =>
    `transition-colors duration-200 px-2 py-1 rounded-md ${
      location.pathname === path
        ? "text-purple-700 font-semibold bg-purple-100"
        : "text-gray-500 hover:text-purple-500"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-gray-100 text-gray-800">
      <header className="p-6 flex justify-between items-center shadow-md bg-white sticky top-0 z-10">
        <h1 className="text-xl font-bold text-purple-700">My Portfolio</h1>
        <nav className="space-x-2">
          <Link to="/" className={linkClasses("/")}>About</Link>
          <Link to="/skills" className={linkClasses("/skills")}>Skills</Link>
          <Link to="/history" className={linkClasses("/history")}>History</Link>
          <Link to="/tools" className={linkClasses("/tools")}>Tools</Link>
        </nav>
      </header>

      <main className="p-8 max-w-4xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;