import React from 'react';
import { ArrowRight, Zap, Brain, Video, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* Left Content */}
          <div className="flex-1 lg:pr-12 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Video Analysis
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automated{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Cricket Highlight
                </span>{' '}
                Generation
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Deep GAN + Reinforcement Learning
              </p>
              
              <p className="text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transform hours of cricket footage into exciting highlight reels using cutting-edge unsupervised 
                deep learning. Our AI automatically identifies and extracts the most thrilling moments from any cricket match.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
                  Try Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group border-2 border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Video className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>

              {/* Features */}
              <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Brain className="h-6 w-6 text-green-600 mr-2" />
                    <span className="font-semibold text-gray-800">Deep Learning</span>
                  </div>
                  <p className="text-sm text-gray-500">Advanced GAN architecture for intelligent video analysis</p>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Zap className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-800">Automated</span>
                  </div>
                  <p className="text-sm text-gray-500">No manual intervention required for highlight detection</p>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Award className="h-6 w-6 text-purple-600 mr-2" />
                    <span className="font-semibold text-gray-800">High Quality</span>
                  </div>
                  <p className="text-sm text-gray-500">Precision highlight extraction with optimal timing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 mt-12 lg:mt-0 relative">
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] mx-auto flex items-center justify-center overflow-hidden">
                
                {/* Cricket field background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-green-200 rounded-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white rounded-full"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-8 left-8 bg-white rounded-xl p-3 shadow-lg animate-bounce">
                  <Video className="h-6 w-6 text-green-600" />
                </div>
                
                <div className="absolute top-12 right-12 bg-white rounded-xl p-3 shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                
                <div className="absolute bottom-16 left-12 bg-white rounded-xl p-3 shadow-lg animate-bounce" style={{animationDelay: '2s'}}>
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                
                <div className="absolute bottom-12 right-8 bg-white rounded-xl p-3 shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                  <Award className="h-6 w-6 text-orange-600" />
                </div>

                {/* Central video player mockup */}
                <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-green-500 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-4 border-l-green-600 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-center">
                    <div className="text-xs font-medium">AI Processing</div>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-green-500 h-1 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Progress indicators */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="space-y-2">
                    <div className="w-2 h-8 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-6 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-2 h-10 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;