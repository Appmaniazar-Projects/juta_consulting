import React from 'react';
import { BookOpen, Laptop, Server, Code, BarChart } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'National Certificate in IT',
      level: 'NQF LEVEL 3',
      credits: '130 CREDITS',
      specialization: 'END USER COMPUTING',
      icon: <Laptop className="w-8 h-8 text-[#2e3192]" />,
      color: 'from-blue-50 to-blue-100'
    },
    {
      title: 'National Certificate in IT',
      level: 'NQF LEVEL 4',
      credits: '163 CREDITS',
      specialization: 'TECHNICAL SUPPORT',
      icon: <Server className="w-8 h-8 text-[#00a651]" />,
      color: 'from-green-50 to-green-100'
    },
    {
      title: 'National Certificate in IT',
      level: 'NQF LEVEL 5',
      credits: '147 CREDITS',
      specialization: 'SYSTEMS SUPPORT',
      icon: <Server className="w-8 h-8 text-[#2e3192]" />,
      color: 'from-blue-50 to-blue-100'
    },
    {
      title: 'National Certificate in IT',
      level: 'NQF LEVEL 5',
      credits: '131 CREDITS',
      specialization: 'SYSTEMS DEVELOPMENT',
      icon: <Code className="w-8 h-8 text-[#00a651]" />,
      color: 'from-green-50 to-green-100'
    },
    {
      title: 'National Certificate in IT',
      level: 'NQF LEVEL 6',
      credits: '149 CREDITS',
      specialization: 'BUSINESS ANALYSIS',
      icon: <BarChart className="w-8 h-8 text-[#2e3192]" />,
      color: 'from-blue-50 to-blue-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2e3192] mb-4">
            Our Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT training programs designed to equip you with in-demand skills 
            and nationally recognized qualifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${course.color} rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {course.icon}
                </div>
                <span className="text-xs font-semibold bg-white/80 px-3 py-1 rounded-full">
                  {course.credits}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{course.level}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-lg font-semibold text-[#2e3192]">{course.specialization}</p>
                <button className="mt-4 text-sm font-medium text-[#00a651] hover:text-[#008a43] flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your journey in IT?
          </p>
          <button className="bg-[#2e3192] hover:bg-[#1e2570] text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300">
            Download Course Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
