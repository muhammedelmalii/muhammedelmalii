import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Coffee, Utensils, PartyPopper, Megaphone, Music } from 'lucide-react';

const industryExamples = [
  {
    id: 'beverage',
    icon: <Coffee size={24} />,
    name: 'İçecek Markaları',
    description: 'RedBull, Efes → kokteyl/enerji içeceği önerisi',
    example: 'Doğum haritanız ve yüz analizinize göre; sizi enerjik ve odaklanmış tutacak bir RedBull Tropical Mix öneriyoruz.',
    color: 'from-red-500/20 to-yellow-500/20',
    borderColor: 'border-red-500/30'
  },
  {
    id: 'restaurant',
    icon: <Utensils size={24} />,
    name: 'Restoran / Bar',
    description: 'QR kodla masaya özel içecek önerisi',
    example: 'Karakteriniz ve anlık ruh halinize uygun olarak, bu akşam bizim imza kokteyilimiz olan "Ateş & Buz" karışımını denemenizi öneriyoruz.',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30'
  },
  {
    id: 'wedding',
    icon: <PartyPopper size={24} />,
    name: 'Düğün / Davet',
    description: 'Girişte öneri + hatıra kartı',
    example: 'Eğlenceli ve sosyal enerjinizle, düğün kokteyilimiz "Forever Sparkle"ı denemelisiniz. Bu içeceğin hikayesi çift gibi sizi de etkileyecek.',
    color: 'from-pink-500/20 to-purple-500/20',
    borderColor: 'border-pink-500/30'
  },
  {
    id: 'launch',
    icon: <Megaphone size={24} />,
    name: 'Marka Lansmanı',
    description: 'İlk temasta ziyaretçiye özel öneri + etkileşim',
    example: 'Yenilikçi ve öncü kişiliğiniz, tam da bu yeni ürünümüzün hedef kitlesine uyuyor. İlk deneyenlerden olmanız bizi mutlu etti!',
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 'festival',
    icon: <Music size={24} />,
    name: 'Festival / Etkinlik',
    description: 'Hızlı tarama + kişiye özel paylaşım',
    example: 'Festival enerjiniz doruklarda! Size özel playlist önerimizi QR kodla alabilir ve anı ölümsüzleştirebilirsiniz.',
    color: 'from-green-500/20 to-teal-500/20',
    borderColor: 'border-green-500/30'
  }
];

const Customization: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState(industryExamples[0]);

  return (
    <section id="customization" className="py-24 bg-gradient-to-b from-black to-violet-950/90">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Markanıza Özel Uyarlanabilir"
          subtitle="Görseller, renkler, dil, öneri tonu — hepsi sizin markanıza özel şekilde uyarlanabilir. AstroMix & FaceMix, sizin müşterinize sizin dilinizle hitap eder."
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-white text-lg font-medium mb-6">Sektörler</h3>
              
              <nav className="space-y-2">
                {industryExamples.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry)}
                    className={`flex items-center w-full p-3 rounded-lg transition-all ${
                      activeIndustry.id === industry.id 
                        ? 'bg-violet-700/40 text-white' 
                        : 'text-violet-300 hover:bg-violet-900/40 hover:text-white'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      activeIndustry.id === industry.id 
                        ? 'bg-violet-500/50' 
                        : 'bg-violet-800/30'
                    }`}>
                      {industry.icon}
                    </div>
                    <span>{industry.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className={`bg-gradient-to-br ${activeIndustry.color} border ${activeIndustry.borderColor} rounded-xl p-8 backdrop-blur-sm h-full`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                  {activeIndustry.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-white text-lg font-medium">{activeIndustry.name}</h3>
                  <p className="text-white/70 text-sm">{activeIndustry.description}</p>
                </div>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-white/60 mb-2">Örnek Senaryo:</div>
                <p className="text-white leading-relaxed">
                  {activeIndustry.example}
                </p>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-sm text-white/60 mb-4">Markaya Özel Uyarlamalar:</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/20 p-3 rounded-lg">
                    <div className="text-xs text-white/60 mb-1">Renk Şeması</div>
                    <div className="text-white text-sm">Marka renkleri ile uyumlu</div>
                  </div>
                  <div className="bg-black/20 p-3 rounded-lg">
                    <div className="text-xs text-white/60 mb-1">Dil & Ton</div>
                    <div className="text-white text-sm">Marka sesine uyarlanmış</div>
                  </div>
                  <div className="bg-black/20 p-3 rounded-lg">
                    <div className="text-xs text-white/60 mb-1">Ürün Kataloğu</div>
                    <div className="text-white text-sm">Marka ürünleriyle entegre</div>
                  </div>
                  <div className="bg-black/20 p-3 rounded-lg">
                    <div className="text-xs text-white/60 mb-1">Kiosk Tasarımı</div>
                    <div className="text-white text-sm">Marka kimliğine özel</div>
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

export default Customization;