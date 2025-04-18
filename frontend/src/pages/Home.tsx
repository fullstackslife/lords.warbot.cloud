import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import BrevoForm from '../components/BrevoForm';

export const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(./assets/cyber-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src="./assets/logo.png" 
                alt="Warbot Logo" 
                className="mx-auto h-24 md:h-32 w-auto"
              />
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
                Automate the Grind. Win the Wars.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Built by players who were tired of losing castles overnight. Warbot handles the boring stuff — farming, shielding, bank runs — so you can focus on dominating the battlefield.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-lg transform hover:scale-105 transition duration-300"
              >
                Launch Dashboard
              </Link>
              <Link
                to="/tasks"
                className="inline-block px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white text-lg font-bold rounded-lg transform hover:scale-105 transition duration-300"
              >
                View Tasks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <BrevoForm 
                formId="YOUR_NEWSLETTER_FORM_ID" // Replace with your actual Brevo form ID
                type="newsletter"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What Warbot Actually Does</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition">
              <h3 className="text-2xl font-bold mb-4 text-lime-400">Battle-Tested Automation</h3>
              <p className="text-gray-300">
                We built this after watching 15 devices lose shields during a blackout. It handles troop sheltering, RSS gathering, and even war join-ins — no taps required.
              </p>
            </div>
            <div className="p-8 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition">
              <h3 className="text-2xl font-bold mb-4 text-lime-400">Smart Defense</h3>
              <p className="text-gray-300">
                It knows when your castle is exposed — and covers your ass before the scouts arrive. Built by players who've been zeroed one too many times.
              </p>
            </div>
            <div className="p-8 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition">
              <h3 className="text-2xl font-bold mb-4 text-lime-400">Guild Coordination</h3>
              <p className="text-gray-300">
                Tired of missing war rallies? Our bot syncs with your guild's schedule and handles the logistics, so you can focus on the fight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Stop Losing Sleep?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of players who've stopped waking up to zeroed castles. No fluff — just tools that actually work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-lg transform hover:scale-105 transition duration-300"
            >
              Start Your Journey
            </Link>
            <Link
              to="/help"
              className="inline-block px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white text-lg font-bold rounded-lg transform hover:scale-105 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}; 