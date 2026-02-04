import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, CheckCircle2, Globe, ChevronDown, Calendar, ArrowUpRight, Users, Building2, Gavel, Target, Lightbulb, Shield, Quote } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, Variants } from 'framer-motion';
import { ABOUT_TEXT, TESTIMONIALS } from '../../constants';
import { Section } from '../components/Section';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';
import { ImageWithSkeleton } from '../components/ImageWithSkeleton';
import { useLegalUpdates } from '../hooks/useLegalUpdates';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Updated Khmer Name with correct spelling
const FIRM_NAMES = [
  "ការិយាល័យមេធាវី តាហ្រ្គែន", // Fixed spelling
  "Dagrand Law Office",
  "Cabinet d'Avocats Dagrand",
  "柬埔寨达观律师事务所"
];

const Hero = () => {
  const [nameIndex, setNameIndex] = useState(0);
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Logic using Framer Motion
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]); // Background moves slower
  const yText = useTransform(scrollY, [0, 300], [0, 100]); // Text moves down slightly
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]); // Fade out text on scroll

  // 3D Tilt & Spotlight Logic (Using MotionValues for Performance)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoother springs for premium feel (Tilt)
  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });
  
  // Rotate ranges: Strong tilt (15deg) as requested
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Reveal Mask: Reduced size to 120px (Smaller/Tighter as requested)
  const maskImage = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, black 0%, transparent 120px)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate normalized position (-0.5 to 0.5) for tilt
    const xPct = (e.clientX - left) / width - 0.5;
    const yPct = (e.clientY - top) / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);

    // Set pixel position for spotlight mask
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % FIRM_NAMES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Determine if current text is Khmer to apply Moul font
  const isKhmer = nameIndex === 0;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-navy perspective-1000 cursor-default group"
    >
      {/* Cinematic Parallax Background */}
      <motion.div 
        style={{ y: yBg, scale: 1.1 }} // Start scaled up slightly to allow movement
        className="absolute inset-0 z-0 bg-brand-navy" // Set base background to Navy
      >
        {/* 1. BASE DARK LAYER (Default View) */}
        {/* Adjusted: Brighter base image and lighter overlay so it's NOT BLACK, but dark blue */}
        <div className="absolute inset-0 z-0">
             <ImageWithSkeleton
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Dagrand Legal Background Dark" 
                className="w-full h-full object-cover grayscale-[10%] brightness-[0.6]" // Increased brightness
                containerClassName="w-full h-full"
            />
             {/* Reduced opacity from 90 to 70 to let more image/color through */}
             <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply"></div>
        </div>

        {/* 2. REVEALED BRIGHT LAYER (Spotlight) */}
        <motion.div 
            className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
                WebkitMaskImage: maskImage, // Safari/Chrome support
                maskImage: maskImage,       // Standard support
            }}
        >
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Dagrand Legal Background Light" 
                // Brightness boosted slightly to pop, saturated slightly to show color
                className="w-full h-full object-cover brightness-110 saturate-110" 
            />
            {/* Blend Brand Colors: Gold & Navy Tint on the revealed image */}
            <div className="absolute inset-0 bg-brand-gold/15 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-brand-navy/20 mix-blend-soft-light"></div>
        </motion.div>

        {/* Global Texture (Applies to both layers) */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
      </motion.div>
      
      {/* Floating Elements (Background Orbs) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-gold rounded-full blur-[100px] opacity-20 mix-blend-screen" 
         />
      </div>

      {/* 3D Tilted Content Container */}
      <motion.div 
        style={{ 
          rotateX, 
          rotateY, 
          y: yText, 
          opacity: opacityText,
          transformStyle: "preserve-3d" 
        }}
        className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full pt-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center w-full transform-style-3d"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, z: 50 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 mb-10 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl shadow-brand-navy/50 hover:bg-white/10 transition-colors"
          >
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_#b49b67]"></div>
              <span className="text-white/90 text-xs md:text-sm font-bold tracking-[0.25em] uppercase drop-shadow-md">
                {t('trusted')}
              </span>
          </motion.div>
          
          {/* Rotating Title */}
          <div className="min-h-[160px] md:min-h-[220px] flex items-center justify-center mb-6 perspective-1000">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={nameIndex}
                initial={{ opacity: 0, rotateX: 90, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, rotateX: 0, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, rotateX: -90, y: -40, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`font-bold tracking-tight leading-tight drop-shadow-2xl text-white ${
                  isKhmer 
                  ? 'font-moul font-normal text-3xl md:text-5xl lg:text-6xl xl:text-7xl py-6 leading-relaxed tracking-normal' 
                  : 'font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl'
                }`}
              >
                {FIRM_NAMES[nameIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Glowing Slogan */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.8, duration: 1 }}
             className="mb-14 max-w-4xl mx-auto"
          >
            <h2 className="text-xl md:text-3xl font-serif italic text-white/90">
              <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent drop-shadow-sm font-medium">
                {t('slogan')}
              </span>
            </h2>
          </motion.div>

          {/* Interactive Buttons with Micro-interactions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center transform-style-3d"
          >
            <Link 
              to="/practice-areas" 
              className="group relative w-full sm:w-auto overflow-hidden bg-brand-gold text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest shadow-[0_20px_50px_rgba(180,155,103,0.3)] hover:shadow-[0_25px_60px_rgba(180,155,103,0.5)] hover:-translate-y-1 transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {t('practice')} <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Shine Effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine-sweep" />
            </Link>

            <Link 
              to="/contact" 
              className="group w-full sm:w-auto relative px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-white border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 shadow-lg active:scale-95 overflow-hidden"
            >
               <span className="relative z-10 group-hover:text-white transition-colors">{t('contactTeam')}</span>
               <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Animated Scroll Indicator - Centered */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-0 right-0 mx-auto w-fit flex flex-col items-center gap-2 cursor-pointer text-white/40 hover:text-brand-gold transition-colors z-20"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">{t('scrollDown')}</span>
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </div>
  );
};

const Home = () => {
  const { t } = useLanguage();
  const { updates } = useLegalUpdates();
  
  return (
  <div className="bg-white">
    <SEO 
        title="Dagrand Law Office - Trusted Legal Excellence in Cambodia"
        description="Dagrand Law Office is a leading boutique law firm in Cambodia providing strategic, insightful, and globally informed legal services in Corporate, Tax, Real Estate, and Dispute Resolution."
        keywords="Cambodia Law Firm, Legal Services, Corporate Law, Tax Law, Real Estate Cambodia"
    />
    <Hero />
    
    {/* SECTION 1: Welcome & Intro */}
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-brand-gray rounded-full opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative lg:pr-8"
            >
                <div className="relative group">
                    <div className="rounded-sm overflow-hidden shadow-2xl relative z-10 aspect-[4/5] md:aspect-square lg:aspect-[4/5] transform transition-transform duration-700 group-hover:scale-[1.02]">
                         <ImageWithSkeleton
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Dagrand Law Office Executive" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            containerClassName="w-full h-full"
                        />
                         <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
                    </div>
                    <div className="absolute top-8 left-8 w-full h-full border-2 border-brand-gold z-0 hidden md:block transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                    <div className="absolute bottom-10 -right-4 md:-right-10 bg-white p-6 shadow-xl z-20 border-t-4 border-brand-gold max-w-[240px] transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                        <p className="font-serif font-bold text-brand-navy text-xl mb-1">Trusted Partners</p>
                        <p className="text-gray-500 text-sm">Committed to integrity and efficiency in every case.</p>
                    </div>
                </div>
            </motion.div>

            <Section>
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-[2px] w-8 bg-brand-gold"></span>
                    <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">{t('welcome')}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-navy mb-8 leading-[1.1]">
                    A Boutique <br />
                    <span className="italic text-brand-gold">Law Firm</span>
                </h2>
                
                <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed mb-10 text-justify">
                    <p>{ABOUT_TEXT[0]}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                    <Link to="/about" className="group inline-flex items-center justify-center gap-3 bg-brand-navy text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-brand-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        {t('readStory')}
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </Section>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            {[
                { icon: Globe, title: "International Standards", desc: "Bringing both local and international experience to ensure globally informed legal solutions." },
                { icon: CheckCircle2, title: "Client-Centric", desc: "Prioritizing professionalism, integrity, and efficiency in every case we handle for you." },
                { icon: Scale, title: "Diverse Expertise", desc: "Spanning dispute resolution, corporate, investment, IP, tax, and international trade." }
            ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-brand-gray p-8 rounded-sm hover:bg-brand-navy hover:text-white transition-all duration-300 group border-b-4 border-transparent hover:border-brand-gold shadow-sm hover:shadow-2xl hover:-translate-y-2 cursor-default">
                    <div className="bg-white p-3 rounded-full w-fit mb-6 shadow-sm group-hover:bg-white/10 transition-colors">
                        <item.icon className="h-6 w-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>

    {/* SECTION 2: Strategic Vision */}
    <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold opacity-10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Section className="text-center max-w-4xl mx-auto mb-16">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                    Bridging <span className="text-brand-gold italic">Local Expertise</span> with <br/>Global Standards
                 </h2>
                 <p className="text-gray-300 text-lg leading-relaxed font-light">
                    Our team comprises highly skilled lawyers with academic qualifications from internationally recognized universities in Cambodia, France, and China. We don't just interpret the law; we navigate the cultural and regulatory nuances to secure your success.
                 </p>
            </Section>

            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
                {[
                    { icon: Users, number: "4+", label: "Languages Spoken", sub: "Khmer, English, French, Chinese" },
                    { icon: Building2, number: "10+", label: "Practice Areas", sub: "Comprehensive Legal Coverage" },
                    { icon: Gavel, number: "100%", label: "Commitment", sub: "Professionalism & Integrity" }
                ].map((stat, idx) => (
                    <motion.div key={idx} variants={fadeInUp} className="p-8 border border-white/10 rounded-sm bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-brand-gold/50 transition-all duration-300 hover:-translate-y-1">
                        <stat.icon className="h-12 w-12 text-brand-gold mx-auto mb-6 drop-shadow-[0_0_10px_rgba(180,155,103,0.5)]" />
                        <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{stat.number}</div>
                        <div className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2">{stat.label}</div>
                        <div className="text-gray-400 text-sm">{stat.sub}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>

    {/* SECTION 3: Our Approach (New) */}
    <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Section className="text-center mb-20">
                 <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="h-[2px] w-8 bg-brand-gold"></span>
                    <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">{t('methodology')}</span>
                    <span className="h-[2px] w-8 bg-brand-gold"></span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-6">{t('approach')}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed font-light">
                    We believe that exceptional legal representation requires more than just knowledge of the law—it demands a deep understanding of our clients' businesses and a proactive strategy to achieve their goals.
                </p>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                 {/* Decorative Line */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent -z-10"></div>

                {[
                    { 
                        icon: Target,
                        step: "01", 
                        title: "Understand", 
                        desc: "We begin by listening. Gaining a deep understanding of your business landscape, challenges, and objectives is the foundation of our partnership." 
                    },
                    { 
                        icon: Lightbulb,
                        step: "02", 
                        title: "Strategize", 
                        desc: "Drawing on our diverse expertise, we craft tailored legal strategies that not only mitigate risk but pave the way for sustainable growth." 
                    },
                    { 
                        icon: Shield,
                        step: "03", 
                        title: "Execute", 
                        desc: "With precision and integrity, we implement solutions, advocating for your interests with the full weight of our local and international experience." 
                    }
                ].map((item, idx) => (
                    <Section key={idx} className="bg-white h-full">
                        <div className="flex flex-col items-center text-center group h-full px-4 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-24 h-24 rounded-full bg-white border-2 border-brand-gray shadow-lg flex items-center justify-center mb-8 group-hover:border-brand-gold group-hover:shadow-[0_0_20px_rgba(180,155,103,0.2)] transition-all duration-500 relative">
                                <item.icon className="h-8 w-8 text-brand-navy group-hover:text-brand-gold transition-colors duration-300" />
                                <div className="absolute -top-3 -right-3 bg-brand-gold text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
                        </div>
                    </Section>
                ))}
            </div>
            
            <Section className="mt-16 text-center">
                <Link to="/contact" className="inline-flex items-center gap-2 text-brand-navy font-bold uppercase tracking-widest text-xs border-b-2 border-brand-gold pb-1 hover:text-brand-gold hover:border-transparent transition-all hover:-translate-y-1">
                    Start a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
            </Section>
        </div>
    </section>
    
    {/* NEW SECTION: Testimonials (Social Proof) */}
    <section className="py-24 bg-brand-navy relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full blur-[80px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Section>
                <div className="text-center mb-16">
                    <Quote className="h-10 w-10 text-brand-gold mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Trusted by Leaders</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
                        We pride ourselves on building lasting relationships based on trust, results, and discretion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors duration-300 relative">
                            {/* Decorative Quote Mark */}
                            <div className="absolute top-4 right-4 text-6xl font-serif text-brand-gold/10 leading-none">”</div>
                            
                            <p className="text-gray-300 italic mb-8 leading-relaxed font-light relative z-10">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold font-serif">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm uppercase tracking-wider">{testimonial.author}</div>
                                    <div className="text-brand-gold text-xs">{testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    </section>

    {/* SECTION 4: Latest Insights */}
    <section className="py-24 bg-brand-gray relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <Section>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-[2px] w-8 bg-brand-navy"></span>
                        <span className="text-brand-navy font-bold tracking-[0.25em] uppercase text-xs">{t('knowledgeHub')}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">{t('latestInsights')}</h2>
                </Section>
                <Link to="/updates" className="group flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors">
                    {t('viewAll')} <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {updates.slice(0, 3).map((update) => (
                    <motion.div key={update.id} variants={fadeInUp}>
                        <Link to={`/updates/${update.id}`} className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2 cursor-pointer">
                            <div className="relative h-60 overflow-hidden">
                                <ImageWithSkeleton 
                                    src={update.image} 
                                    alt={update.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    containerClassName="w-full h-full"
                                />
                                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-300"></div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-brand-navy uppercase tracking-widest flex items-center gap-2 shadow-sm z-10">
                                    <Calendar className="h-3 w-3 text-brand-gold" /> {update.date}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow relative">
                                <h3 className="text-xl font-serif font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors line-clamp-2">
                                    {update.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                    {update.summary}
                                </p>
                                
                                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                                    {update.author ? (
                                        <div className="flex items-center gap-2">
                                            <img src={update.author.avatar} alt={update.author.name} className="w-8 h-8 rounded-full border border-gray-200" />
                                            <div>
                                                <div className="text-[10px] font-bold text-brand-navy uppercase">{update.author.name}</div>
                                            </div>
                                        </div>
                                    ) : (
                                        <span className="text-xs font-bold text-brand-navy uppercase tracking-widest">{t('readMore')}</span>
                                    )}
                                    <div className="p-2 rounded-full bg-brand-gray group-hover:bg-brand-gold group-hover:text-white transition-colors">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  </div>
  );
};

export default Home;