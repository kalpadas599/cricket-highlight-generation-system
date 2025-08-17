import React from 'react';
import { Github, ExternalLink, Star, GitFork, Code, Database, Cpu } from 'lucide-react';

const About = () => {
  const technologies = [
    { name: "Python", description: "Core programming language for AI development" },
    { name: "TensorFlow/PyTorch", description: "Deep learning frameworks for model training" },
    { name: "OpenCV", description: "Computer vision library for video processing" },
    { name: "NumPy", description: "Numerical computing for data manipulation" },
    { name: "Matplotlib", description: "Data visualization and analysis" },
    { name: "CUDA", description: "GPU acceleration for faster processing" }
  ];

  const features = [
    {
      icon: Code,
      title: "Open Source",
      description: "Complete source code available on GitHub with detailed documentation"
    },
    {
      icon: Database,
      title: "Unsupervised Learning",
      description: "No manual annotation required - learns cricket patterns automatically"
    },
    {
      icon: Cpu,
      title: "High Performance",
      description: "Optimized for GPU acceleration with efficient processing algorithms"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An innovative research project combining deep learning and reinforcement learning for automated sports video summarization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Project Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Research Overview</h3>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project implements an advanced unsupervised video summarization system specifically designed for cricket matches. 
                Using a combination of Generative Adversarial Networks (GANs) and Reinforcement Learning, the system automatically 
                identifies and extracts the most exciting moments from cricket videos.
              </p>
              <p>
                The key innovation lies in the unsupervised approach - the system learns to recognize important cricket moments 
                without requiring manually labeled training data. This makes it highly scalable and adaptable to different 
                cricket formats and playing styles.
              </p>
            </div>

            {/* GitHub Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Repository Stats</h4>
                <Github className="h-5 w-5 text-gray-600" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-semibold text-gray-900">Stars</span>
                  </div>
                  <p className="text-sm text-gray-600">Open Source</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <GitFork className="h-4 w-4 text-blue-500 mr-1" />
                    <span className="font-semibold text-gray-900">Forks</span>
                  </div>
                  <p className="text-sm text-gray-600">Community</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <Code className="h-4 w-4 text-green-500 mr-1" />
                    <span className="font-semibold text-gray-900">Python</span>
                  </div>
                  <p className="text-sm text-gray-600">Language</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-2">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Technologies Used</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Explore the Code</h3>
            <p className="text-lg mb-6 opacity-90">
              Dive into the implementation details and contribute to the project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/kalpadas599/Unsupervised-video-summarization-with-deep-GAN-reinforcement-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
              <button className="inline-flex items-center border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
                <ExternalLink className="h-5 w-5 mr-2" />
                Read Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;