import React from 'react';
import { Link } from 'react-router-dom';

const ContributorProgram: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Contributor Program</h1>
        
        {/* Program Overview */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Earn WBT Tokens</h2>
          <p className="text-gray-300 mb-6">
            Join our community of contributors and earn rewards by helping improve our Lords Mobile automation tools.
            Train OCR models, submit automation tasks, and participate in our development ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">OCR Training</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Submit labeled screenshots</li>
                <li>• Validate OCR results</li>
                <li>• Improve model accuracy</li>
                <li>• Earn per submission</li>
              </ul>
            </div>
            <div className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Task Automation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Create automation scripts</li>
                <li>• Test new features</li>
                <li>• Report bugs</li>
                <li>• Earn by contribution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white mb-2">Join the Community</h3>
                <p className="text-gray-300">
                  Sign up for our contributor program and join our Discord community.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white mb-2">Choose Your Focus</h3>
                <p className="text-gray-300">
                  Select from OCR training, automation development, or bug hunting.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white mb-2">Submit Contributions</h3>
                <p className="text-gray-300">
                  Complete tasks and submit your work through our contributor portal.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                4
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white mb-2">Earn Rewards</h3>
                <p className="text-gray-300">
                  Get paid in WBT tokens based on your contributions and impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to Start Contributing?</h2>
          <p className="text-gray-300 mb-8">
            Join our Discord server to get started and learn more about the contributor program.
          </p>
          <div className="space-x-4">
            <a
              href="https://discord.gg/lordswarbot"
              className="inline-block bg-primary-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Join Discord
            </a>
            <Link
              to="/tasker"
              className="inline-block bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              View Tasker Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorProgram; 