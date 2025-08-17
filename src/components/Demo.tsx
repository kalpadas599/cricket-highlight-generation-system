import React, { useState, useRef } from 'react';
import { Upload, Play, Download, Loader, CheckCircle, AlertCircle, FileVideo, Sparkles } from 'lucide-react';

const Demo = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setUploadedFile(file);
      setIsComplete(false);
      setProgress(0);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      setUploadedFile(file);
      setIsComplete(false);
      setProgress(0);
    }
  };

  const processVideo = () => {
    setIsProcessing(true);
    setProgress(0);
    
    // Simulate processing with progress updates
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setIsComplete(true);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 500);
  };

  const resetDemo = () => {
    setUploadedFile(null);
    setIsProcessing(false);
    setIsComplete(false);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Try the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">AI Demo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your cricket video and watch our AI automatically generate exciting highlights in seconds
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Upload Section */}
            <div className="p-8">
              {!uploadedFile ? (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-green-400 transition-colors duration-300 cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Cricket Video</h3>
                  <p className="text-gray-500 mb-4">Drag and drop your video file here, or click to browse</p>
                  <p className="text-sm text-gray-400">Supports MP4, AVI, MOV files up to 500MB</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  {/* File Info */}
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <FileVideo className="h-8 w-8 text-green-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{uploadedFile.name}</h4>
                      <p className="text-sm text-gray-500">
                        {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                    {isComplete && <CheckCircle className="h-6 w-6 text-green-600" />}
                  </div>

                  {/* Processing Status */}
                  {isProcessing && (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Loader className="h-5 w-5 text-blue-600 animate-spin" />
                        <span className="text-gray-700 font-medium">Processing video with AI...</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500">
                        Analyzing cricket moments and generating highlights... {Math.round(progress)}%
                      </p>
                    </div>
                  )}

                  {/* Results */}
                  {isComplete && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 text-green-600">
                        <CheckCircle className="h-6 w-6" />
                        <span className="font-semibold">Highlights generated successfully!</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Original Video Preview */}
                        <div className="space-y-3">
                          <h4 className="font-medium text-gray-900">Original Video</h4>
                          <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                            <div className="text-center text-white">
                              <Play className="h-12 w-12 mx-auto mb-2 opacity-70" />
                              <p className="text-sm opacity-70">Original Cricket Match</p>
                              <p className="text-xs opacity-50">Duration: 2:45:30</p>
                            </div>
                          </div>
                        </div>

                        {/* Generated Highlights */}
                        <div className="space-y-3">
                          <h4 className="font-medium text-gray-900 flex items-center">
                            <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
                            AI Generated Highlights
                          </h4>
                          <div className="bg-gradient-to-br from-green-900 to-blue-900 rounded-lg aspect-video flex items-center justify-center">
                            <div className="text-center text-white">
                              <Play className="h-12 w-12 mx-auto mb-2" />
                              <p className="text-sm">Cricket Highlights</p>
                              <p className="text-xs opacity-70">Duration: 8:45</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                          <Download className="h-5 w-5 mr-2" />
                          Download Highlights
                        </button>
                        <button 
                          onClick={resetDemo}
                          className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:border-green-500 hover:text-green-600 transition-all duration-300"
                        >
                          Try Another Video
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Process Button */}
                  {!isProcessing && !isComplete && (
                    <button
                      onClick={processVideo}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <Sparkles className="h-5 w-5 mr-2" />
                      Generate Highlights with AI
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Demo Note */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>This is a demo interface. Actual processing requires the trained model backend.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;