import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src="/assets/logo.png" alt="Warbot Logo" className="h-10" />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
              <Link to="/simulations" className="hover:text-blue-400 transition">Simulations</Link>
              <Link to="/resources" className="hover:text-blue-400 transition">Resources</Link>
              <Link to="/security" className="hover:text-blue-400 transition">Security</Link>
              <Link to="/about" className="hover:text-blue-400 transition">About</Link>
              <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Warbot</h3>
              <p className="text-gray-400">
                Empowering Web3 communities with advanced AI solutions and security services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
                <li><Link to="/documentation" className="text-gray-400 hover:text-white">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Discord: warbot.cloud</li>
                <li className="text-gray-400">Twitter: @warbotcloud</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Warbot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}; 