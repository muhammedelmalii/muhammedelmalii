import React from 'react';
import { Star, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center text-2xl font-bold mb-4">
            <Star className="text-violet-400 mr-2" size={24} />
            <span>AstroMix & FaceMix</span>
          </div>
          <p className="text-violet-300 text-center max-w-xl">
            AI-Powered kişiselleştirilmiş deneyimler ve öneriler ile markanızı bir sonraki seviyeye taşıyın.
          </p>
        </div>
        
        <div className="border-t border-violet-900/50 py-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <a href="#about" className="text-violet-300 hover:text-white transition-colors">
              Hakkımızda
            </a>
            <a href="#modules" className="text-violet-300 hover:text-white transition-colors">
              Modüller
            </a>
            <a href="#customization" className="text-violet-300 hover:text-white transition-colors">
              Uyarlama
            </a>
            <a href="#outputs" className="text-violet-300 hover:text-white transition-colors">
              Çıktılar
            </a>
            <a href="#usecases" className="text-violet-300 hover:text-white transition-colors">
              Sektörler
            </a>
            <a href="#contact" className="text-violet-300 hover:text-white transition-colors">
              Demo
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-violet-400 text-sm mb-4 md:mb-0">
            © 2025 AstroMix & FaceMix | AI-Powered Personalized Experiences
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-violet-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-violet-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-violet-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-violet-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;