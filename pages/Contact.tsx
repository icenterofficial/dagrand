
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Linkedin, Send, CheckCircle } from 'lucide-react';

const SimpleWeChatIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.5,13.2c-3.6,0-6.5-2.7-6.5-6.1S4.9,1,8.5,1s6.5,2.7,6.5,6.1S12.1,13.2,8.5,13.2z M6.1,5.6 C5.7,5.6,5.4,5.9,5.4,6.3s0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7S6.5,5.6,6.1,5.6z M10.4,5.6c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7 c0.4,0,0.7-0.3,0.7-0.7S10.8,5.6,10.4,5.6z M16.7,9.6c-3,0-5.5,2.2-5.5,5c0,2.8,2.5,5,5.5,5c0.6,0,1.2-0.1,1.7-0.3l1.5,0.8 l-0.4-1.4c1.3-1,2.1-2.4,2.1-3.9C21.7,11.9,19.4,9.6,16.7,9.6z M15,13.3c-0.3,0-0.6,0.2-0.6,0.6s0.2,0.6,0.6,0.6 s0.6-0.2,0.6-0.6S15.4,13.3,15,13.3z M18.4,13.3c-0.3,0-0.6,0.2-0.6,0.6s0.2,0.6,0.6,0.6c0.3,0,0.6-0.2,0.6-0.6 S18.7,13.3,18.4,13.3z"/>
    </svg>
);

const Contact = () => {
  const { content } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Dagrand Law Office";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate network request
      setTimeout(() => {
          setIsSubmitting(false);
          setIsSent(true);
          // Reset after 5 seconds
          setTimeout(() => setIsSent(false), 5000);
      }, 1500);
  };

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
             <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur px-6 py-3 rounded-full shadow-lg font-bold text-brand-900 dark:text-white flex items-center animate-fade-in-up">
                <MapPin className="text-red-500 mr-2"/> Phnom Penh, Cambodia
             </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             
             {/* Info */}
             <div className="animate-fade-in-up">
                <h1 className="text-4xl font-serif font-bold text-brand-900 dark:text-white mb-8">{content.contact.title}</h1>
                <div className="space-y-8">
                    <div className="flex items-start">
                        <MapPin className="text-gold-600 mt-1 mr-4 shrink-0" size={24}/>
                        <div>
                            <h3 className="font-bold text-brand-900 dark:text-gold-500 mb-1">{content.contact.addressLabel}</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed w-3/4">
                                Dagrand Law Office, Floor 1, Building No. 162, Street 51 corner Street 334, 
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
                            <p className="text-slate-600 dark:text-slate-300 mb-1">
                                Khmer, English, French: <br/>
                                <span className="text-brand-900 dark:text-white font-medium text-lg">{content.contact.khmerEngFr}</span>
                            </p>
                            <p className="text-slate-600 dark:text-slate-300">
                                Chinese: <br/>
                                <span className="text-brand-900 dark:text-white font-medium text-lg">{content.contact.chinese}</span>
                            </p>
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

                <div className="mt-12 flex flex-wrap gap-4">
                    <a 
                        href="https://kh.linkedin.com/company/dagrand-law-office" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="group bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#006097] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-3 font-medium shadow-md"
                    >
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                        <span>LinkedIn</span>
                    </a>

                    <a 
                        href="https://weixin.qq.com/f/ECDRPH4RTPL1xzLPvnX5RQw" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="group bg-[#07C160] text-white px-6 py-3 rounded-lg hover:bg-[#06a050] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-3 font-medium shadow-md"
                    >
                        <SimpleWeChatIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>WeChat</span>
                    </a>
                </div>
             </div>

             {/* Form - Interactive */}
             <div className="bg-slate-50 dark:bg-slate-800 p-10 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300 animate-fade-in-up delay-100">
                <h3 className="text-2xl font-serif font-bold text-brand-900 dark:text-white mb-6">Send us a message</h3>
                
                {isSent ? (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center animate-fade-in">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                            <CheckCircle size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-brand-900 dark:text-white mb-2">Message Sent!</h4>
                        <p className="text-slate-600 dark:text-slate-300">Thank you for contacting Dagrand Law Office. We will get back to you shortly.</p>
                        <button onClick={() => setIsSent(false)} className="mt-6 text-sm font-bold text-gold-600 hover:underline">Send another message</button>
                    </div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                                <input required type="text" className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded px-4 py-2 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                                <input required type="text" className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded px-4 py-2 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-colors" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input required type="email" className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded px-4 py-2 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                            <textarea required rows={4} className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded px-4 py-2 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-colors"></textarea>
                        </div>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`w-full bg-gold-600 text-white font-bold py-3 rounded hover:bg-gold-500 transition-all shadow-md flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        >
                            {isSubmitting ? (
                                <>Sending...</>
                            ) : (
                                <><Send size={18} /> Send Message</>
                            )}
                        </button>
                        <p className="text-xs text-center text-slate-400">
                            By sending this message, you agree to our privacy policy.
                        </p>
                    </form>
                )}
             </div>
          </div>
       </div>
    </div>
  );
};

export default Contact;
