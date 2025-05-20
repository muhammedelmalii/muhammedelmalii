import React from 'react';
import SectionTitle from './SectionTitle';
import { QrCode, Share2, FileText, Mail } from 'lucide-react';

const OutputCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm hover:bg-violet-900/30 transition-all hover:transform hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-violet-800/50 flex items-center justify-center text-violet-300 mb-4">
        {icon}
      </div>
      <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
      <p className="text-violet-200/80">
        {description}
      </p>
    </div>
  );
};

const Outputs: React.FC = () => {
  return (
    <section id="outputs" className="py-24 bg-gradient-to-b from-violet-950/90 to-black">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Çıktılar ve İçerik Üretimi"
          subtitle="Kişiselleştirilmiş öneriler ve içerikler, çeşitli formatlarda sunularak müşteri deneyimini zenginleştirir."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <OutputCard 
            icon={<QrCode size={24} />}
            title="QR Kod"
            description="Kişiye özel öneri sayfası, menü yönlendirmesi ve detaylı bilgi için kolay erişim sağlar."
          />
          
          <OutputCard 
            icon={<Share2 size={24} />}
            title="Sosyal Medya"
            description="Story/post formatında paylaşıma hazır öneri kartı, markanızla etkileşimi artırır."
          />
          
          <OutputCard 
            icon={<FileText size={24} />}
            title="PDF Kart"
            description="Mail ya da basılabilir hatıra önerisi, kullanıcının deneyimi kalıcı hale getirir."
          />
          
          <OutputCard 
            icon={<Mail size={24} />}
            title="E-posta"
            description="Kişiye özel takip ve CRM desteği, marka iletişimini güçlendirir ve sürekliliği sağlar."
          />
        </div>
        
        <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl overflow-hidden backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-white text-xl font-medium mb-4">İçerik Akışı</h3>
              <p className="text-violet-200/80 mb-6">
                AstroMix & FaceMix, fiziksel deneyimi dijital dünyaya taşır. Kiosk'ta başlayan yolculuk, 
                sosyal medyada ve e-postada devam eder, marka ile müşteri arasında devamlı bir köprü kurar.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-violet-800/50 flex items-center justify-center text-violet-300 mr-3">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div className="flex-1 bg-violet-800/30 p-3 rounded-lg text-white">
                    Kiosk'ta Kişisel Analiz
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-violet-800/50 flex items-center justify-center text-violet-300 mr-3">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <div className="flex-1 bg-violet-800/30 p-3 rounded-lg text-white">
                    Önerinin Ekranda Gösterimi
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-violet-800/50 flex items-center justify-center text-violet-300 mr-3">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div className="flex-1 bg-violet-800/30 p-3 rounded-lg text-white">
                    QR Kod ile Dijital İçeriğe Erişim
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-violet-800/50 flex items-center justify-center text-violet-300 mr-3">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <div className="flex-1 bg-violet-800/30 p-3 rounded-lg text-white">
                    Sosyal Medyada Paylaşım
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-violet-800/50 flex items-center justify-center text-violet-300 mr-3">
                    <span className="text-sm font-medium">5</span>
                  </div>
                  <div className="flex-1 bg-violet-800/30 p-3 rounded-lg text-white">
                    E-posta ile Takip ve Hatırlatma
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-violet-800/30 to-blue-800/30 p-8 flex items-center justify-center">
              <div className="max-w-md bg-black/40 rounded-xl overflow-hidden backdrop-blur-md border border-violet-500/30">
                <div className="h-6 bg-violet-900/50 flex items-center px-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mr-1"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-1"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-white font-medium">AstroMix Öneriniz</div>
                    <div className="text-xs text-violet-300">Paylaş</div>
                  </div>
                  
                  <div className="bg-violet-900/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 mr-3"></div>
                      <div>
                        <div className="text-white text-sm font-medium">Yaratıcı Gezgin</div>
                        <div className="text-xs text-violet-300">Ateş & Hava elementleri</div>
                      </div>
                    </div>
                    
                    <div className="text-white text-sm mb-2">
                      Girişimci ruhunuz ve yenilikçi bakış açınız sizi özel kılıyor!
                    </div>
                    
                    <div className="text-violet-200 text-xs">
                      Size özel kokteyl önerimiz: <span className="font-medium">Cosmic Blueberry Sparkle</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="w-1/2 pr-2">
                      <div className="bg-violet-900/30 rounded-lg p-3 text-center">
                        <QrCode size={48} className="mx-auto mb-2 text-violet-300" />
                        <div className="text-white text-xs">QR kodu tara</div>
                      </div>
                    </div>
                    
                    <div className="w-1/2 pl-2">
                      <div className="bg-violet-900/30 rounded-lg p-3 text-center">
                        <Mail size={48} className="mx-auto mb-2 text-violet-300" />
                        <div className="text-white text-xs">E-posta gönder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outputs;