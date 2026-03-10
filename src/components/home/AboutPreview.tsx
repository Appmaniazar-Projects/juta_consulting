import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, BookOpen, Users } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2e3192] leading-tight">
                About Juta Training & Consulting
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a premier skill development academy dedicated to empowering individuals 
                and organizations through innovative training programs and strategic consulting services. 
                Our mission is to bridge the gap between current skills and future opportunities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience and a team of industry experts, we've successfully 
                transformed careers and businesses across various sectors through our comprehensive 
                approach to professional development.
              </p>
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center bg-[#00a651] hover:bg-[#059669] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#2e3192] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Target className="h-8 w-8 text-[#2e3192] mb-3" />
                  <Target className="h-8 w-8 text-white mb-3" />
                  <h3 className="font-semibold text-white mb-2">Focused Approach</h3>
                  <p className="text-sm text-gray-200">Targeted training programs designed for maximum impact</p>
                </div>
                <div className="bg-[#00a651] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8">
                  <Users className="h-8 w-8 text-[#00a651] mb-3" />
                  <Users className="h-8 w-8 text-white mb-3" />
                  <h3 className="font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-200">Industry professionals with proven track records</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-[#ed1c24] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <BookOpen className="h-8 w-8 text-[#ed1c24] mb-3" />
                  <BookOpen className="h-8 w-8 text-white mb-3" />
                  <h3 className="font-semibold text-white mb-2">Comprehensive</h3>
                  <p className="text-sm text-gray-200">End-to-end learning solutions for all skill levels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;