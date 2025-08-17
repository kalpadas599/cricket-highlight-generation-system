import React from 'react';
import { Github, ExternalLink, Mail, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg">
                <Play className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cricket AI</h3>
                <p className="text-sm text-gray-400">Highlight Generator</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Automated cricket highlight generation using advanced deep learning and reinforcement learning techniques. 
              Transform hours of cricket footage into exciting highlight reels.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/kalpadas599/Unsupervised-video-summarization-with-deep-GAN-reinforcement-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@cricketai.com"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/kalpadas599/Unsupervised-video-summarization-with-deep-GAN-reinforcement-learning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  GitHub Repository
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research Paper</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Cricket AI Highlight Generator. Open source project.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;