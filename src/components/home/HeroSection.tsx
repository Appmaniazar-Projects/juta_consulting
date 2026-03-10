import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/hero-animations.css';
import leafPlaceholder from '../../assets/images/leaf-placeholder.svg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#2e3192] to-[#1a1e4e] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ffdd00]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#00a651]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-[#ff6b6b]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Left Leaf */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 w-1/4 max-w-xs hidden lg:block">
        <img 
          src={leafPlaceholder} 
          alt="Decorative leaf" 
          className="w-full h-auto opacity-70 transform -scale-x-100"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-5xl mx-auto text-center py-20 w-full">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span 
              className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-base font-medium text-[#ffdd00] border border-[#ffdd00]/30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Empowering South Africa's Digital Future
            </motion.span>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block text-[#ffdd00] mb-4">JUTA TRAINING</span>
              <span className="block text-white">& SKILLS DEVELOPMENT</span>
              <span className="block text-white font-light text-2xl md:text-3xl mt-8 leading-relaxed">
                Dedicated to increasing employability and career opportunities for countless individuals
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Industry-recognized IT certifications and practical training programs designed to launch successful careers in technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link 
                to="/courses" 
                className="flex items-center justify-center gap-3 bg-[#00a651] hover:bg-[#008a43] text-white px-10 py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Our Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 hover:border-white/70 text-white px-10 py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <Play className="w-5 h-5" />
                Watch Our Story
              </button>
            </motion.div>
            
            <motion.div 
              className="mt-16 pt-8 border-t border-white/10 w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                { value: '5,000+', label: 'Students Trained', color: 'text-[#ffdd00]' },
                { value: '95%', label: 'Success Rate', color: 'text-[#00a651]' },
                { value: '50+', label: 'Corporate Clients', color: 'text-white' },
                { value: '10+', label: 'Years Experience', color: 'text-white' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Leaf */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 w-1/4 max-w-xs hidden lg:block">
        <img 
          src={leafPlaceholder} 
          alt="Decorative leaf" 
          className="w-full h-auto opacity-70"
        />
      </div>
    </section>
  );
};

export default HeroSection;