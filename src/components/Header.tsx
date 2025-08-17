import React, { useState } from 'react';
import { Menu, X, Github, Play } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg">
              <Play className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Cricket AI</h1>
              <p className="text-xs text-gray-500">Highlight Generator</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#demo" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Demo
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              How It Works
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              About
            </a>
            
            <a 
              href="https://github.com/kalpadas599/Unsupervised-video-summarization-with-deep-GAN-reinforcement-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
                Home
              </a>
              <a href="#demo" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
                Demo
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
                How It Works
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
                About
              </a>
              <a 
                href="https://github.com/kalpadas599/Unsupervised-video-summarization-with-deep-GAN-reinforcement-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 mx-3 mt-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;