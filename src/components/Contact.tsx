import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-violet-950/90 to-black">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Markanıza Özel Deneyimi Oluşturalım"
          subtitle="Bize ulaşın, AstroMix & FaceMix'in markanız için nasıl çalışabileceğini birlikte keşfedelim."
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-8 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-violet-300 text-sm mb-2">
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-violet-900/30 border border-violet-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-400"
                    placeholder="Adınız ve Soyadınız"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-violet-300 text-sm mb-2">
                    Firmanız
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-violet-900/30 border border-violet-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-400"
                    placeholder="Firma Adı"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-violet-300 text-sm mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-violet-900/30 border border-violet-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-400"
                  placeholder="email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-violet-300 text-sm mb-2">
                  İlgi Alanınız
                </label>
                <select
                  id="interest"
                  className="w-full bg-violet-900/30 border border-violet-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-400"
                >
                  <option value="" disabled selected className="text-violet-400">Seçiniz...</option>
                  <option value="beverage">İçecek Markası</option>
                  <option value="restaurant">Restoran / Bar</option>
                  <option value="event">Düğün / Etkinlik</option>
                  <option value="festival">Festival</option>
                  <option value="launch">Marka Lansmanı</option>
                  <option value="other">Diğer</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-violet-300 text-sm mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-violet-900/30 border border-violet-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-400"
                  placeholder="Bizimle paylaşmak istediğiniz detaylar..."
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <Button className="px-8 flex items-center">
                  <Send size={16} className="mr-2" />
                  DEMO TALEP ET
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;