import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
       {/* Map Placeholder */}
       <div className="w-full h-80 bg-slate-200 dark:bg-slate-800 relative">
          <img 
            src="https://picsum.photos/id/1015/1920/600" 
            alt="Map Location" 
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur px-6 py-3 rounded-full shadow-lg font-bold text-brand-900 dark:text-white flex items-center">
                <MapPin className="text-red-500 mr-2"/> Phnom Penh, Cambodia
             </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             
             {/* Info */}
             <div>
                <h1 className="text-4xl font-serif font-bold text-brand-900 dark:text-white mb-8">{content.contact.title}</h1>
                <div className="space-y-8">
                    <div className="flex items-start">
                        <MapPin className="text-gold-600 mt-1 mr-4 shrink-0" size={24}/>
                        <div>
                            <h3 className="font-bold text-brand-900 dark:text-gold-500 mb-1">{content.contact.addressLabel}</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed w-3/4">
                                Floor 1, Building No. 162, Street 51 corner Street 334, 
                                Sangkat Boeung Keng Kang 1, Khan Chamkarmon, Phnom Penh, Cambodia
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <Clock className="text-gold-600 mt-1 mr-4 shrink-0" size={24}/>
                        <div>
                            <h3 className="font-bold text-brand-900 dark:text-gold-500 mb-1">{content.contact.hoursLabel}</h3>
                            <p className="text-slate-600 dark:text-slate-300">{content.contact.hoursValue}</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Phone className="text-gold-600 mt-1 mr-4 shrink-0" size={24}/>
                        <div>
                            <h3 className="font-bold text-brand-900 dark:text-gold-500 mb-1">{content.contact.phoneLabel}</h3>
                            <p className="text-slate-600 dark:text-slate-300">Khmer, English, French: <span className="text-brand-900 dark:text-white font-medium">+855 (0)98 539 910</span></p>
                            <p className="text-slate-600 dark:text-slate-300">Chinese: <span className="text-brand-900 dark:text-white font-medium">+855 (0)96 866 8508</span></p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Mail className="text-gold-600 mt-1 mr-4 shrink-0" size={24}/>
                        <div>
                            <h3 className="font-bold text-brand-900 dark:text-gold-500 mb-1">{content.contact.emailLabel}</h3>
                            <a href="mailto:info@dagrand.net" className="text-gold-600 hover:underline">info@dagrand.net</a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex space-x-4">
                    <a href="https://kh.linkedin.com/company/dagrand-law-office" target="_blank" rel="noreferrer" className="bg-brand-900 dark:bg-slate-700 text-white px-6 py-3 rounded hover:bg-brand-800 dark:hover:bg-slate-600 transition">
                        LinkedIn
                    </a>
                </div>
             </div>

             {/* Form - Visual Only for now */}
             <div className="bg-slate-50 dark:bg-slate-800 p-10 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300">
                <h3 className="text-2xl font-serif font-bold text-brand-900 dark:text-white mb-6">Send us a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                            <input type="text" className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded px-4 py-2 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                            <input type="text" className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded px-4 py-2 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-colors" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                        <input type="email" className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded px-4 py-2 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                        <textarea rows={4} className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded px-4 py-2 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-colors"></textarea>
                    </div>
                    <button className="w-full bg-gold-600 text-white font-bold py-3 rounded hover:bg-gold-500 transition-colors shadow-md">
                        Send Message
                    </button>
                </form>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Contact;
