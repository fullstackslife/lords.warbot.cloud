import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to Warbot Ops</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Automate Your Lords Mobile Experience</h2>
          <p className="text-gray-300">
            Take control of your game with advanced automation tools and war resource management.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Join Our Community</h2>
          <p className="text-gray-300">
            Connect with other players and earn rewards through our referral program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 