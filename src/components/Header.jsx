import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Header = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setSession(null);
    setLoading(false);
    navigate('/login');
  };

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
          {loading ? (
            <span className="text-gray-500">Loading...</span>
          ) : session ? (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Dashboard
              </Link>
              <Link to="/messages" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Messages
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                disabled={loading}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Login
              </Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;