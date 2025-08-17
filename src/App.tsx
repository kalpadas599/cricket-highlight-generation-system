import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Demo />
      <HowItWorks />
      <About />
      <Footer />
    </div>
  );
}

export default App;