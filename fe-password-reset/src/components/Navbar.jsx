import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-l from-purple-600 to-orange-400 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-black">
        Sky App
      </Link>
      {token ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 px-6 py-2 rounded-full"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-white text-purple-500 px-6 py-2 rounded-full"
        >
          Login
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
