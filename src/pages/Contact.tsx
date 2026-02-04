import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../../constants';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';

const Contact = () => (
  <div className="bg-brand-gray min-h-screen flex flex-col">
    <SEO 
        title="Contact Us"
        description="Get in touch with Dagrand Law Office. We are available for consultations in English, French, Chinese, and Khmer."
    />
    <PageHeader 
        title="Contact Us" 
        subtitle="Let us assist you with your legal needs. We are here to provide clear and effective solutions." 
    />

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white shadow-xl overflow-hidden flex flex-col lg:flex-row relative z-10"
        >
            {/* Info Section */}
            <div className="lg:w-5/12 bg-brand-navy text-white p-10 md:p-14">
                <h2 className="text-3xl font-serif font-bold mb-8">Get in Touch</h2>
                <p className="text-gray-300 mb-12 leading-relaxed font-light">
                    We are available for consultations in English, French, Chinese, and Khmer.
                </p>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-5">
                        <MapPin className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-white mb-1">Our Office</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <Clock className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-white mb-1">Business Hours</h3>
                            <p className="text-gray-400 text-sm">{CONTACT_INFO.businessHours}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <Phone className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-white mb-1">Phone</h3>
                            <div className="space-y-1">
                                {CONTACT_INFO.phones.map((p, i) => (
                                    <p key={i} className="text-gray-400 text-sm">{p.number} <span className="text-xs text-brand-gold/70 ml-2">({p.label.split(',')[0]})</span></p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <Mail className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-white mb-1">Email</h3>
                            <p className="text-gray-400 text-sm">{CONTACT_INFO.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="lg:w-7/12 p-10 md:p-14">
                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-8">Send us a message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-navy outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-navy outline-none transition-all" placeholder="email@example.com" />
                        </div>
                    </div>
                        <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-navy outline-none transition-all" placeholder="Legal Inquiry..." />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                        <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-navy outline-none transition-all" placeholder="How can we help you?"></textarea>
                    </div>
                    <button className="bg-brand-gold text-white font-bold py-4 px-8 uppercase tracking-widest text-sm hover:bg-brand-navy transition-all duration-300 w-full md:w-auto">
                        Send Message
                    </button>
                </form>
            </div>
        </motion.div>
     </div>

     {/* Google Map Section - Interactive & Premium Styled */}
     <div className="w-full h-[500px] relative border-t-4 border-brand-gold">
        <iframe 
            width="100%" 
            height="100%" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Street+51+corner+Street+334,+Phnom+Penh&t=&z=17&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0}
            title="Dagrand Law Office Location"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
        ></iframe>
        {/* Overlay Label for Desktop */}
        <div className="absolute top-10 right-10 bg-white p-6 shadow-2xl rounded-sm max-w-xs hidden md:block border-l-4 border-brand-navy">
            <h4 className="font-serif font-bold text-brand-navy text-lg mb-2">Visit Our Office</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
                Building No. 162, St. 51 corner St. 334,<br/>
                BKK1, Phnom Penh
            </p>
        </div>
     </div>
  </div>
);

export default Contact;