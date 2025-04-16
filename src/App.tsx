import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';
import Whitepaper from './pages/Whitepaper';
import Tasker from './pages/Tasker';
import Referral from './pages/Referral';
import GuildServices from './pages/GuildServices';
import ContributorProgram from './pages/ContributorProgram';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-900">
          {/* Navigation */}
          <nav className="bg-gray-800 py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-white flex items-center">
                  <span className="text-primary-400">Lords.</span>Warbot
                </Link>
                <div className="hidden md:flex space-x-6">
                  <Link to="/guild-services" className="text-gray-300 hover:text-white transition-colors">
                    Guild Services
                  </Link>
                  <Link to="/contributor" className="text-gray-300 hover:text-white transition-colors">
                    Contributor Program
                  </Link>
                  <Link to="/referral" className="text-gray-300 hover:text-white transition-colors">
                    Referral Rewards
                  </Link>
                  <Link to="/whitepaper" className="text-gray-300 hover:text-white transition-colors">
                    Whitepaper
                  </Link>
                </div>
                <button className="md:hidden text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="min-h-[calc(100vh-64px-200px)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/guild-services" element={<GuildServices />} />
              <Route path="/contributor" element={<ContributorProgram />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
              <Route path="/tasker" element={<Tasker />} />
              <Route path="/referral" element={<Referral />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4">About</h3>
                  <p className="text-gray-300">
                    Elite-level automation and guild resource tools for Lords Mobile.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/guild-services" className="text-gray-300 hover:text-white">
                        Guild Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/contributor" className="text-gray-300 hover:text-white">
                        Contributor Program
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/whitepaper" className="text-gray-300 hover:text-white">
                        Whitepaper
                      </Link>
                    </li>
                    <li>
                      <Link to="/tasker" className="text-gray-300 hover:text-white">
                        Tasker Hub
                      </Link>
                    </li>
                    <li>
                      <a href="/api-docs" className="text-gray-300 hover:text-white">
                        API Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Contact</h3>
                  <p className="text-gray-300">
                    Discord: lordswarbot
                    <br />
                    Email: support@lords.warbot.cloud
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