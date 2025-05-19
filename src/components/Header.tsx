import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          AstroMix & FaceMix
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-violet-300 transition-colors">
            About
          </a>
          <a href="#modules" className="text-white hover:text-violet-300 transition-colors">
            Modules
          </a>
          <a href="#customization" className="text-white hover:text-violet-300 transition-colors">
            Customization
          </a>
          <a href="#usecases" className="text-white hover:text-violet-300 transition-colors">
            Use Cases
          </a>
          <Button href="#contact">
            Request Demo
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-white py-2 hover:text-violet-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#modules" 
              className="text-white py-2 hover:text-violet-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Modules
            </a>
            <a 
              href="#customization" 
              className="text-white py-2 hover:text-violet-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Customization
            </a>
            <a 
              href="#usecases" 
              className="text-white py-2 hover:text-violet-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <Button href="#contact" className="w-full">
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;