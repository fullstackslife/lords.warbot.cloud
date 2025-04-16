import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../public/logo.png';
import warbotLogo from '../public/warbotlogo.webp';
import cyberBg from '../public/cyber-bg.jpg';
import cyberBgSvg from '../public/cyber-bg.svg';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-black text-white">
        {/* Fixed Navigation */}
        <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 px-6 py-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <img src={warbotLogo} alt="Lords Warbot Logo" className="h-8 w-8" />
                <span className="text-2xl font-bold text-white">Lords Warbot</span>
              </Link>
              <div className="space-x-4">
                <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={
              <>
                {/* Hero Section */}
                <header className="relative w-full h-screen flex flex-col items-center justify-center text-center pt-16">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cyberBg})` }}
                  />
                  {/* SVG Pattern Overlay */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: `url(${cyberBgSvg})` }}
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60" />

                  {/* Hero Content */}
                  <div className="relative z-10 px-4">
                    <img src={logo} alt="Lords Warbot Logo" className="h-32 w-32 mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      Lords Warbot Cloud
                    </h1>
                    <p className="text-xl text-gray-300 max-w-xl mx-auto mb-8">
                      Advanced Lords Mobile Automation & War Resource Platform
                    </p>
                    <div className="space-x-4">
                      <Link to="/features" className="btn-primary">
                        Get Started
                      </Link>
                      <Link to="/pricing" className="btn-secondary">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </header>

                {/* Features Section */}
                <section className="relative w-full py-20 bg-gray-900" id="features">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="card">
                        <h3 className="text-xl font-semibold mb-4">War Operations</h3>
                        <p className="text-gray-300">
                          16-device optimized system for time-critical war operations
                        </p>
                      </div>
                      <div className="card">
                        <h3 className="text-xl font-semibold mb-4">Resource Management</h3>
                        <p className="text-gray-300">
                          400B+ gatherable resources with automated distribution
                        </p>
                      </div>
                      <div className="card">
                        <h3 className="text-xl font-semibold mb-4">Token Ecosystem</h3>
                        <p className="text-gray-300">
                          Earn tokens through OCR validation and war participation
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            } />
            <Route path="/features" element={<div>Features Page</div>} />
            <Route path="/pricing" element={<div>Pricing Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900/80 backdrop-blur-md py-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src={warbotLogo} alt="Lords Warbot Logo" className="h-6 w-6" />
                  <h3 className="text-white font-semibold">About</h3>
                </div>
                <p className="text-gray-300">
                  Advanced Lords Mobile automation and war resource platform.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <p className="text-gray-300">
                  Discord: lords.warbot
                  <br />
                  Email: support@lords.warbot.cloud
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              © {new Date().getFullYear()} Lords Warbot Cloud. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
