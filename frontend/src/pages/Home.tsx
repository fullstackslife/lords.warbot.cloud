import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/cyber-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Web3 Security & AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Empowering communities with advanced AI technology and comprehensive security services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-lg font-semibold transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
              <p className="text-gray-400">
                Cutting-edge AI solutions for Web3 communities, including custom chatbots and automation tools.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Security Services</h3>
              <p className="text-gray-400">
                Comprehensive security audits and monitoring for smart contracts and Web3 applications.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Community Tools</h3>
              <p className="text-gray-400">
                Advanced tools and simulations for managing and growing Web3 communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the growing number of Web3 communities leveraging our AI and security solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>
    </Layout>
  );
}; 