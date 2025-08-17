import React from 'react';
import { Upload, Brain, Zap, Download, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Video",
      description: "Upload your cricket match video in any standard format (MP4, AVI, MOV)",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Deep GAN network analyzes the video using reinforcement learning to identify key moments",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Smart Processing",
      description: "Unsupervised learning algorithms automatically detect exciting cricket moments and actions",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: Download,
      title: "Get Highlights",
      description: "Download your professionally edited highlight reel with the most thrilling moments",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI system uses cutting-edge deep learning techniques to automatically create cricket highlights
          </p>
        </div>

        <div className="relative">
          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgColor} mb-6`}>
                    <step.icon className={`h-8 w-8 ${step.textColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2 transform translate-x-full">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="lg:hidden flex justify-center mt-8 space-x-4">
            {steps.slice(0, -1).map((_, index) => (
              <ArrowRight key={index} className="h-5 w-5 text-gray-300" />
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Technical Architecture
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Built with state-of-the-art deep learning technologies for optimal performance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Deep GAN</h4>
                  <p className="text-gray-600 text-sm">Generative Adversarial Networks for intelligent video understanding and feature extraction</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Reinforcement Learning</h4>
                  <p className="text-gray-600 text-sm">Advanced RL algorithms that learn to identify the most exciting cricket moments</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Upload className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Unsupervised Learning</h4>
                  <p className="text-gray-600 text-sm">No manual labeling required - the system learns cricket patterns automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;