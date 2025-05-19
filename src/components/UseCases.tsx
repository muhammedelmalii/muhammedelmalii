import React from 'react';
import SectionTitle from './SectionTitle';
import { Coffee, Utensils, PartyPopper, Megaphone, Music } from 'lucide-react';

const UseCaseCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm hover:bg-violet-900/30 transition-all">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-violet-800/50 flex items-center justify-center text-violet-300">
          {icon}
        </div>
      </div>
      <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
      <p className="text-violet-200/80">
        {description}
      </p>
    </div>
  );
};

const UseCases: React.FC = () => {
  return (
    <section id="usecases" className="py-24 bg-gradient-to-b from-black to-violet-950/90">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Kullanım Alanları"
          subtitle="AstroMix & FaceMix, çeşitli sektörlerde benzersiz müşteri deneyimleri yaratmak için kullanılabilir."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <UseCaseCard 
            icon={<Coffee size={24} />}
            title="İçecek Markaları"
            description="RedBull, Efes gibi markalar için kokteyl/enerji içeceği önerisi. Marka deneyimini kişiselleştirir, müşteri bağlılığını artırır."
          />
          
          <UseCaseCard 
            icon={<PartyPopper size={24} />}
            title="Düğün / Davet"
            description="Girişte konuklara özel içecek önerisi ve hatıra kartı. Özel günleri unutulmaz kılar, davetlilere benzersiz bir deneyim sunar."
          />
          
          <UseCaseCard 
            icon={<Utensils size={24} />}
            title="Restoran / Bar"
            description="QR kodla masaya özel içecek önerisi. Müşteri memnuniyetini artırır, menü keşfini kolaylaştırır ve ortalama sipariş tutarını yükseltir."
          />
          
          <UseCaseCard 
            icon={<Music size={24} />}
            title="Festival / Etkinlik"
            description="Hızlı tarama + kişiye özel içerik ve paylaşım imkanı. Sosyal medya görünürlüğünü artırır, etkinlik anılarını kalıcı hale getirir."
          />
          
          <UseCaseCard 
            icon={<Megaphone size={24} />}
            title="Marka Lansmanı"
            description="İlk temasta ziyaretçiye özel öneri ve etkileşim. Ürünlerin akılda kalıcılığını sağlar, marka hatırlanırlığını güçlendirir."
          />
          
          <div className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/30 rounded-xl p-6 backdrop-blur-sm flex flex-col justify-center">
            <h3 className="text-white text-lg font-medium mb-4">Özel Çözümler</h3>
            <p className="text-violet-200/80 mb-6">
              Farklı bir sektörde misiniz? AstroMix & FaceMix, 
              markanızın ihtiyaçlarına göre özelleştirilebilir.
            </p>
            <div className="inline-block">
              <a 
                href="#contact" 
                className="text-violet-300 hover:text-white border-b border-violet-500/50 hover:border-violet-300 transition-colors"
              >
                Bizimle iletişime geçin →
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-xl font-medium mb-4">Başarı Hikayesi</h3>
              <p className="text-violet-200 mb-6">
                RedBull Summer Festival'da 2 günde 5.000+ kullanıcı, AstroMix & FaceMix deneyimini yaşadı. 
                Katılımcılara kişisel özelliklerine uygun içecek önerildi ve sosyal medyada 2,5 milyondan fazla etkileşim alındı.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-violet-800/30 py-4 rounded-lg">
                  <div className="text-xl font-bold text-white mb-1">5,000+</div>
                  <div className="text-violet-300 text-sm">Kullanıcı</div>
                </div>
                <div className="bg-violet-800/30 py-4 rounded-lg">
                  <div className="text-xl font-bold text-white mb-1">86%</div>
                  <div className="text-violet-300 text-sm">Paylaşım Oranı</div>
                </div>
                <div className="bg-violet-800/30 py-4 rounded-lg">
                  <div className="text-xl font-bold text-white mb-1">2.5M+</div>
                  <div className="text-violet-300 text-sm">Etkileşim</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-xl transform rotate-3"></div>
              <div className="relative bg-black/40 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-blue-500 mr-4 flex items-center justify-center">
                    <Coffee size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">RedBull Summer Edition</div>
                    <div className="text-sm text-violet-300">Festival Özel Kiosk</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <div className="text-sm text-violet-300 mb-1">Durum</div>
                    <div className="text-white">Yüksek enerji ve yaratıcı profiller öne çıktı</div>
                  </div>
                  
                  <div className="bg-black/20 p-4 rounded-lg">
                    <div className="text-sm text-violet-300 mb-1">En Popüler Öneri</div>
                    <div className="text-white">"Tropical Sunrise Energy Mix"</div>
                  </div>
                  
                  <div className="bg-black/20 p-4 rounded-lg">
                    <div className="text-sm text-violet-300 mb-1">Sonuç</div>
                    <div className="text-white">Festival içecek satışlarında %32 artış</div>
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

export default UseCases;