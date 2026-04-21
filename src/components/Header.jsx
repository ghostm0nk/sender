import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  // Authentication-related state and effects have been removed as per request.
  // The 'navigate' hook is kept in case it's used elsewhere in the component later,
  // but it's not strictly necessary for the current simplified navigation.
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md p-4 w-full">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          Sender
        </Link>

        <div className="flex items-center space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Search items..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Search
          </button>
        </div>

        <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-lg">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>
          <Link to="/items/new" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Create Item
          </Link>
          {/* Authentication-related links (Login, Register, Dashboard, Messages, Logout) have been removed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;