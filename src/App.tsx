import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';
import Whitepaper from './pages/Whitepaper';
import Tasker from './pages/Tasker';
import Referral from './pages/Referral';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-900">
          {/* Navigation */}
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

          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
              <Route path="/tasker" element={<Tasker />} />
              <Route path="/referral" element={<Referral />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4">About</h3>
                  <p className="text-gray-300">
                    Advanced Lords Mobile automation and war resource platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/whitepaper" className="text-gray-300 hover:text-white">
                        Whitepaper
                      </Link>
                    </li>
                    <li>
                      <Link to="/tasker" className="text-gray-300 hover:text-white">
                        Become a Tasker
                      </Link>
                    </li>
                    <li>
                      <Link to="/referral" className="text-gray-300 hover:text-white">
                        Referral Program
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Contact</h3>
                  <p className="text-gray-300">
                    Discord: warbotops
                    <br />
                    Email: support@warbotops.com
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App; 