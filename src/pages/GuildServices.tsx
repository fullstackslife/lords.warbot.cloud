import React from 'react';

const GuildServices: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-8">Guild Services</h1>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Rally Management</h2>
          <p className="text-gray-300 mb-4">
            Automated rally fill tracking and coordination system to ensure optimal resource distribution and participation.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• Real-time fill status monitoring</li>
            <li>• Resource contribution tracking</li>
            <li>• Automated notifications</li>
            <li>• Performance analytics</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Account Leasing</h2>
          <p className="text-gray-300 mb-4">
            Secure and efficient account leasing management system for guild members.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• Automated lease tracking</li>
            <li>• Secure access management</li>
            <li>• Usage analytics</li>
            <li>• Payment processing</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Resource Packs</h2>
          <p className="text-gray-300 mb-4">
            Comprehensive tracking and management of hyper and filler packs across the guild.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• Pack inventory management</li>
            <li>• Distribution optimization</li>
            <li>• Resource allocation</li>
            <li>• Usage reporting</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Resource Distribution</h2>
          <p className="text-gray-300 mb-4">
            Smart tools for managing and distributing guild resources efficiently.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• Resource tracking</li>
            <li>• Distribution planning</li>
            <li>• Priority management</li>
            <li>• Audit logging</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Ready to enhance your guild operations?</h2>
        <p className="text-gray-300 mb-8">
          Contact us on Discord or email to get started with our guild services.
        </p>
        <div className="space-x-4">
          <a
            href="https://discord.gg/lordswarbot"
            className="inline-block bg-primary-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Join Discord
          </a>
          <a
            href="mailto:support@lords.warbot.cloud"
            className="inline-block bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default GuildServices; 