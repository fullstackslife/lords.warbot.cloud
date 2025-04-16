import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Warbot Ops
          </Link>
          <div className="space-x-4">
            <Link to="/whitepaper" className="text-gray-300 hover:text-white">
              Whitepaper
            </Link>
            <Link to="/tasker" className="text-gray-300 hover:text-white">
              Become a Tasker
            </Link>
            <Link to="/referral" className="text-gray-300 hover:text-white">
              Referral Program
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 