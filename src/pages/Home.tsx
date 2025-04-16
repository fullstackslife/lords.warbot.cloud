import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Automate. Organize. Win Wars.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Warbot Ops for Lords Mobile delivers elite-level automation, guild resource tools, and token-based contributor programs.
          </p>
          <Link
            to="/guild-services"
            className="inline-block bg-primary-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Launch Your Ops
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Guild Services */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Guild Services</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• Automated rally fills</li>
              <li>• Account leasing management</li>
              <li>• Hyper/filler pack tracking</li>
              <li>• Resource distribution tools</li>
            </ul>
            <Link
              to="/guild-services"
              className="inline-block mt-6 text-primary-400 hover:text-primary-300"
            >
              Learn more →
            </Link>
          </div>

          {/* Contributor Program */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contributor Program</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• Train OCR models</li>
              <li>• Submit automation tasks</li>
              <li>• Earn WBT tokens</li>
              <li>• Join the dev community</li>
            </ul>
            <Link
              to="/contributor"
              className="inline-block mt-6 text-primary-400 hover:text-primary-300"
            >
              Start contributing →
            </Link>
          </div>

          {/* Referral Rewards */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Referral Rewards</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• Invite guild members</li>
              <li>• Earn WBT tokens</li>
              <li>• Track referral stats</li>
              <li>• Unlock special rewards</li>
            </ul>
            <Link
              to="/referral"
              className="inline-block mt-6 text-primary-400 hover:text-primary-300"
            >
              Start earning →
            </Link>
          </div>
        </div>
      </div>

      {/* Documentation Section */}
      <div className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">Resources & Documentation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/whitepaper"
              className="bg-gray-800 px-6 py-3 rounded-lg text-gray-300 hover:text-white transition-colors"
            >
              Whitepaper
            </Link>
            <Link
              to="/tasker"
              className="bg-gray-800 px-6 py-3 rounded-lg text-gray-300 hover:text-white transition-colors"
            >
              Tasker Hub
            </Link>
            <a
              href="/api-docs"
              className="bg-gray-800 px-6 py-3 rounded-lg text-gray-300 hover:text-white transition-colors"
            >
              API Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 