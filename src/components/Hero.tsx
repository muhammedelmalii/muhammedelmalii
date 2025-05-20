import React from 'react';
import Button from './Button';
import { StarIcon, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-violet-950/80 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              opacity: Math.random() * 0.7
            }}
          />
        ))}
        
        {/* Zodiac wheel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-violet-500/20 animate-spin-slow opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-violet-500/30 animate-spin-slow opacity-30" style={{ animationDuration: '160s' }} />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center mt-16">
        <div className="inline-flex items-center bg-violet-900/30 px-4 py-2 rounded-full mb-8 border border-violet-500/30">
          <StarIcon className="h-4 w-4 text-violet-400 mr-2" />
          <span className="text-violet-200 text-sm font-medium">AI-Powered Personalization</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          AI THAT READS YOU — <br />
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            THROUGH FACE AND STARS
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-violet-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          AstroMix doğum haritanızı çözümler. FaceMix yüz ifadenizi ve enerjinizi analiz eder.
          Bunları kullanarak size özel içecek ve ürün önerileri sunar — gerçek zamanlı, fiziksel ve etkileyici.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button href="#contact">
            DEMO TALEP ET
          </Button>
          <Button href="#modules" primary={false}>
            NASIL ÇALIŞIR?
          </Button>
        </div>
        
        {/* Scanning animation indicator */}
        <div className="relative w-64 h-64 mx-auto mt-12 border-2 border-dashed border-violet-500/50 rounded-full flex items-center justify-center">
          <div className="absolute inset-2 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-violet-700/30" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-violet-500 animate-scan-line" />
          <Sparkles className="h-12 w-12 text-violet-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;