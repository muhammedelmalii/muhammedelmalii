import React from 'react';
import SectionTitle from './SectionTitle';
import { Brain, Scan } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-violet-950/90">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Biz Kimiz?"
          subtitle="AI, astroloji ve yüz analizini birleştirerek kişiselleştirilmiş deneyimi yeni bir boyuta taşıyoruz."
        />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-violet-200 text-lg mb-8 leading-relaxed">
              AstroMix & FaceMix; yapay zekâ, astroloji ve yüz analizini birleştirerek kişisel deneyimi yeni bir 
              boyuta taşıyan bir öneri platformudur. Markalar için anlamlı ve unutulmaz etkileşimler yaratır. 
              Fiziksel kiosk deneyimiyle dijital çıktıları buluşturur.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm">
                <Brain className="h-8 w-8 text-violet-400 mb-4" />
                <h3 className="text-white text-lg font-medium mb-2">Yapay Zeka</h3>
                <p className="text-violet-200/80 text-sm">
                  İleri düzey AI teknolojisi ile doğum haritanızı analiz eder ve kişilik özelliklerinizi belirler.
                </p>
              </div>
              
              <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm">
                <Scan className="h-8 w-8 text-violet-400 mb-4" />
                <h3 className="text-white text-lg font-medium mb-2">Yüz Analizi</h3>
                <p className="text-violet-200/80 text-sm">
                  Gelişmiş yüz tanıma teknolojisiyle ifadenizi ve enerji düzeyinizi gerçek zamanlı olarak analiz eder.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-violet-900/20 border border-violet-500/30 rounded-3xl p-8 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-blue-500"></div>
              
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-violet-950 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-xs uppercase tracking-wider text-violet-300">Enerji</div>
                      <div className="text-2xl font-bold">89%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-violet-800/30 p-4 rounded-lg">
                  <div className="text-xs text-violet-300 mb-1">Karakter</div>
                  <div className="text-white">Yaratıcı & Dışa Dönük</div>
                </div>
                <div className="bg-violet-800/30 p-4 rounded-lg">
                  <div className="text-xs text-violet-300 mb-1">Element</div>
                  <div className="text-white">Ateş & Hava</div>
                </div>
              </div>
              
              <div className="bg-violet-800/30 p-4 rounded-lg text-center">
                <div className="text-xs text-violet-300 mb-1">Öneri</div>
                <div className="text-white font-medium">Çilekli Enerji Kokteyli</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;