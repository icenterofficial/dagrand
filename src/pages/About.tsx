import { Link } from 'react-router-dom';
import { Shield, Globe, CheckCircle2, Building2, Scale, Award } from 'lucide-react';
import { ABOUT_TEXT } from '../../constants';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SEO } from '../components/SEO';

const About = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO 
          title="About Us"
          description="Learn about Dagrand Law Office, a boutique firm dedicated to delivering high-quality, strategic, and globally informed legal services in Cambodia."
      />
      <PageHeader 
          title="About Us" 
          subtitle="A boutique firm registered with the Bar Association of the Kingdom of Cambodia, dedicated to delivering high-quality legal services." 
      />
      
      {/* 1. Introduction - Big Statement */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <Section>
             <Scale className="h-12 w-12 text-brand-gold mx-auto mb-8" />
             <p className="text-2xl md:text-3xl font-serif text-brand-navy leading-relaxed font-medium">
               "{ABOUT_TEXT[0]}"
             </p>
             <div className="w-24 h-1 bg-brand-gold mx-auto mt-12"></div>
           </Section>
        </div>
      </section>

      {/* 2. Global Team Section - Image Left, Text Right */}
      <section className="py-20 bg-brand-gray relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <Section className="relative">
                  <div className="relative rounded-sm overflow-hidden shadow-2xl">
                     <img 
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="International Legal Team" 
                        className="w-full h-full object-cover aspect-[4/3]"
                     />
                     <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply"></div>
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl border-l-4 border-brand-gold hidden md:block">
                     <div className="flex items-center gap-4 mb-2">
                        <Globe className="h-6 w-6 text-brand-gold" />
                        <span className="font-bold text-brand-navy uppercase tracking-widest text-xs">Global Reach</span>
                     </div>
                     <p className="text-sm text-gray-500">Serving Local & Foreign Clients</p>
                  </div>
               </Section>
               
               <Section>
                 <h3 className="text-3xl font-serif font-bold text-brand-navy mb-6">Insightful. Strategic. Globally Informed.</h3>
                 <p className="text-lg text-gray-700 leading-relaxed font-light mb-8 text-justify">
                   {ABOUT_TEXT[1]}
                 </p>
                 
                 {/* Language Pills */}
                 <div className="flex flex-wrap gap-3">
                    {["Khmer", "English", "French", "Chinese"].map(lang => (
                        <span key={lang} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-xs font-bold text-brand-navy uppercase tracking-widest shadow-sm">
                            {lang}
                        </span>
                    ))}
                 </div>
               </Section>
            </div>
         </div>
      </section>

      {/* 3. Values Section - Text Left, Cards Right */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                 <Section className="order-2 md:order-1">
                     <div className="space-y-6">
                        {[
                            { title: "Professionalism", icon: Award, desc: "Upholding the highest standards in every interaction." },
                            { title: "Integrity", icon: Shield, desc: "Honest, transparent, and ethical legal counsel." },
                            { title: "Efficiency", icon: CheckCircle2, desc: "Timely solutions that respect your business goals." }
                        ].map((item, idx) => (
                           <div key={idx} className="flex gap-6 p-6 rounded-sm border border-gray-100 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300 group bg-white">
                               <div className="bg-brand-gray p-3 rounded-full h-fit group-hover:bg-brand-navy transition-colors">
                                   <item.icon className="h-6 w-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                               </div>
                               <div>
                                   <h4 className="font-serif font-bold text-lg text-brand-navy mb-2">{item.title}</h4>
                                   <p className="text-gray-500 text-sm font-light">{item.desc}</p>
                               </div>
                           </div>
                        ))}
                     </div>
                 </Section>

                 <Section className="order-1 md:order-2">
                     <h3 className="text-3xl font-serif font-bold text-brand-navy mb-6">A Client-Centric Approach</h3>
                     <p className="text-lg text-gray-700 leading-relaxed font-light mb-8 text-justify">
                        {ABOUT_TEXT[2]}
                     </p>
                     <div className="p-6 bg-brand-gold/10 border border-brand-gold/20 rounded-sm">
                        <p className="text-brand-navy italic font-serif text-lg">
                           "Dagrand Law Office is your trusted legal partner in Cambodia."
                        </p>
                     </div>
                 </Section>
             </div>
          </div>
      </section>

      {/* 4. Clients & Location - Dark Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <Section>
                 <Building2 className="h-16 w-16 text-brand-gold mx-auto mb-8 opacity-80" />
                 <h3 className="text-3xl font-serif font-bold text-white mb-8">Our Clientele</h3>
                 <p className="text-xl text-gray-300 leading-relaxed font-light mb-12">
                    {ABOUT_TEXT[3]}
                 </p>
                 
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["Multinational Companies", "International Investors", "Real Estate Developers", "Local Corporations"].map((client, i) => (
                        <div key={i} className="p-4 border border-white/10 rounded-sm hover:bg-white/5 transition-colors">
                            <p className="text-brand-gold text-sm font-bold uppercase tracking-wider">{client}</p>
                        </div>
                    ))}
                 </div>

                 <div className="mt-16">
                    <Link to="/contact" className="inline-block bg-brand-gold text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg">
                        Partner With Us
                    </Link>
                 </div>
             </Section>
          </div>
      </section>
    </div>
  );
};

export default About;