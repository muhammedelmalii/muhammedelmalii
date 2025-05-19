import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Modules from './components/Modules';
import Customization from './components/Customization';
import Outputs from './components/Outputs';
import UseCases from './components/UseCases';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Header />
      <Hero />
      <About />
      <Modules />
      <Customization />
      <Outputs />
      <UseCases />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;