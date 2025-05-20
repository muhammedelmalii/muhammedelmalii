import React from 'react';
import SectionTitle from './SectionTitle';
import { Brain, Scan, Computer, FileJson } from 'lucide-react';

const ModuleCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm hover:bg-violet-900/30 transition-all hover:border-violet-500/40 group">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-violet-800/50 flex items-center justify-center text-violet-300 group-hover:text-white group-hover:bg-violet-700 transition-all">
          {icon}
        </div>
        <h3 className="text-white text-lg font-medium ml-4">{title}</h3>
      </div>
      <p className="text-violet-200/80">
        {description}
      </p>
    </div>
  );
};

const Modules: React.FC = () => {
  return (
    <section id="modules" className="py-24 bg-gradient-to-b from-violet-950/90 to-black">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Çözüm Modüllerimiz"
          subtitle="AstroMix & FaceMix'i oluşturan modüller ile güçlü bir deneyim ekosistemi yaratıyoruz."
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <ModuleCard 
            icon={<Brain size={24} />}
            title="AstroMix"
            description="AI destekli doğum haritası analizi & öneri üretimi. Kişilik özellikleri, enerji paterni ve tercihlerinizi yıldızlardan okur."
          />
          
          <ModuleCard 
            icon={<Scan size={24} />}
            title="FaceMix"
            description="Yüz & enerji analizi ile ruh hali, tarz ve profil çıkarımı. Anlık ifadeniz ve enerji durumunuz analiz edilerek size özel içerik üretilir."
          />
          
          <ModuleCard 
            icon={<Computer size={24} />}
            title="Akıllı Kiosk"
            description="Dokunmatik ekran, kamera ve LED sistemli fiziksel deneyim aracı. Etkinlikler, mağazalar ve halka açık alanlarda kullanıma uygun tasarım."
          />
          
          <ModuleCard 
            icon={<FileJson size={24} />}
            title="İçerik Motoru"
            description="QR kod, sosyal medya, dijital çıktı üreten altyapı. Kişiye özel önerileri paylaşılabilir içeriklere dönüştürür ve takip sistemi sunar."
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-violet-900/30 to-blue-900/30 border border-violet-500/20 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-full aspect-square max-w-[240px] mx-auto bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-full border-2 border-dashed border-violet-400/30 animate-spin-slow flex items-center justify-center" style={{ animationDuration: '20s' }}>
                  <div className="text-center">
                    <div className="text-white font-medium">Entegre</div>
                    <div className="text-violet-300 text-sm">Ekosistem</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-xl font-medium text-white mb-4">Tüm Modüller Birlikte Çalışır</h3>
              <p className="text-violet-200 mb-6">
                Her modül tek başına değerli ancak birlikte kullanıldığında maksimum etki yaratır. Doğum haritası ve yüz analizi 
                verileri AI tarafından işlenerek anlamlı önerilere dönüştürülür, fiziksel ve dijital dünyada kullanıcıya sunulur.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-violet-900/20 py-3 px-2 rounded-lg">
                  <div className="text-violet-300 text-xs mb-1">Analiz</div>
                  <div className="text-white text-sm">5-10 sn</div>
                </div>
                <div className="bg-violet-900/20 py-3 px-2 rounded-lg">
                  <div className="text-violet-300 text-xs mb-1">Öneri</div>
                  <div className="text-white text-sm">Gerçek zamanlı</div>
                </div>
                <div className="bg-violet-900/20 py-3 px-2 rounded-lg">
                  <div className="text-violet-300 text-xs mb-1">Çıktı</div>
                  <div className="text-white text-sm">Anında hazır</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;