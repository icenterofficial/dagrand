import { motion } from 'framer-motion';

export const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="relative bg-brand-navy pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    {/* Abstract background elements using brand colors */}
    <div className="absolute top-0 right-0 w-2/3 h-full bg-[#1e4d7b] opacity-20 -skew-x-12 translate-x-1/4"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-wide"
        >
            {title}
        </motion.h1>
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1 bg-brand-gold mx-auto mb-8"
        ></motion.div>
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed"
        >
            {subtitle}
        </motion.p>
    </div>
  </div>
);
