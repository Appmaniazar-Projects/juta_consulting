import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import SkillsShowcase from '../components/home/SkillsShowcase';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import ClientLogos from '../components/home/ClientLogos';

// Add smooth scroll behavior
const SmoothScroll = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  return null;
};

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <SmoothScroll />
      <HeroSection />
      <SkillsShowcase />
      <Testimonials />
      <div className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2e3192] mb-6">Explore Our Training Programs</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover our comprehensive training programs designed to boost your career in the digital age.
          </p>
          <Link 
            to="/courses" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-[#2e3192] hover:bg-[#1a1e4e] transition-colors duration-300 md:py-4 md:text-lg md:px-10"
          >
            View All Courses
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
      <CallToAction />
      <ClientLogos />
    </div>
  );
};

export default Home;