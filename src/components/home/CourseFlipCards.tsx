import React, { useState } from 'react';
import { BookOpen, Laptop, Server, Code, BarChart, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
  frontColor: string;
  backColor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon, frontColor, backColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-80 perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of the card */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-2xl p-8 flex flex-col items-center justify-center ${frontColor} shadow-xl hover:shadow-2xl transition-all duration-300`}
        >
          <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-center text-white mb-2">{title}</h3>
          <div className="flex items-center text-white/90 mt-6 group-hover:text-white transition-colors duration-300">
            <span className="font-medium">Click to learn more</span>
            <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
        
        {/* Back of the card */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-2xl p-8 ${backColor} shadow-xl overflow-y-auto back-flip-scroll`}
        >
          <div className="relative h-full">
            <h4 className="text-2xl font-bold mb-6 text-center">{title}</h4>
            <ul className="space-y-3">
              {description.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start group/item hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="text-yellow-300 mr-3 text-lg">•</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-0 left-0 right-0 text-center py-2">
              <span className="text-xs opacity-70">Click to flip back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseFlipCards = () => {
  const courses = [
    {
      title: 'Administration & Planning',
      description: [
        'Development of curriculum to meet requirements and client specifications',
        'Planning and scheduling for training delivery within required timeframes',
        'Implementation of induction/orientation programs for Learners/Interns',
        'Ensuring facilitators/assessors use prescribed assessment tools'
      ],
      icon: <BookOpen className="w-12 h-12" />,
      frontColor: 'bg-gradient-to-br from-[#2e3192] to-[#1e2570]',
      backColor: 'bg-gradient-to-br from-[#1e2570] to-[#2e3192]'
    },
    {
      title: 'Project Strategies',
      description: [
        'Ensuring facilitators provide necessary feedback for learner competency',
        'Weekly formative assessments with results and feedback',
        'Liaising with stakeholders regarding intern stipends',
        'Coordinating with workplace providers for intern allocation'
      ],
      icon: <Laptop className="w-12 h-12" />,
      frontColor: 'bg-gradient-to-br from-[#00a651] to-[#008a43]',
      backColor: 'bg-gradient-to-br from-[#008a43] to-[#00a651]'
    },
    {
      title: 'Monitoring & Reporting',
      description: [
        'Conducting site visits to workplace providers',
        'Liaising with MICT Seta on quarterly deliverables',
        'Providing Monthly Quality Control Reports',
        'Managing Project administrator for attendance tracking'
      ],
      icon: <BarChart className="w-12 h-12" />,
      frontColor: 'bg-gradient-to-br from-[#ffdd00] to-[#ffc800]',
      backColor: 'bg-gradient-to-br from-[#ffc800] to-[#ffdd00] text-[#2e3192]'
    },
    {
      title: 'Learnership',
      description: [
        'Easy access to learning opportunities',
        'Increased employment opportunities',
        'Development of knowledgeable, competent employees',
        'Enhancing industry competitiveness in global markets'
      ],
      icon: <BookOpen className="w-12 h-12" />,
      frontColor: 'bg-gradient-to-br from-[#2e3192] to-[#1e2570]',
      backColor: 'bg-gradient-to-br from-[#1e2570] to-[#2e3192]'
    },
    {
      title: 'Accreditation Registration',
      description: [
        'NQF-registered unit standards/qualifications',
        'Curriculum aligned with unit standards',
        'Qualified facilitators and registered assessors',
        'Fair, valid, and reliable assessment methods'
      ],
      icon: <Server className="w-12 h-12" />,
      frontColor: 'bg-gradient-to-br from-[#00a651] to-[#008a43]',
      backColor: 'bg-gradient-to-br from-[#008a43] to-[#00a651]'
    },
    {
      title: 'CompTIA',
      description: [
        'CORE+ (ITF+; TECH+; A+; NETWORK+; SECURITY+)',
        'INFRASTRUCTURE+ (CLOUD+; LINUX+; SERVER+)',
        'CYBERSECURITY+ (CySA+; CASP+; PenTest+)',
        'DATA & ANALYTICS+ (DATA+; DataSYS+; DataX+)'
      ],
      icon: <Code className="w-12 h-12" />,
      frontColor: 'bg-gradient-to-br from-[#ffdd00] to-[#ffc800]',
      backColor: 'bg-gradient-to-br from-[#ffc800] to-[#ffdd00] text-[#2e3192]'
    },
    {
      title: 'Microsoft',
      description: [
        'Artificial Intelligence',
        'Compliance',
        'DevOps',
        'Platform Engineering',
        'Security'
      ],
      icon: <Server className="w-12 h-12" />,
      frontColor: 'bg-gradient-to-br from-[#2e3192] to-[#1e2570]',
      backColor: 'bg-gradient-to-br from-[#1e2570] to-[#2e3192]'
    },
    {
      title: 'Corporate Training',
      description: [
        'Site visits to workplace providers',
        'Liaising with MICT Seta on deliverables',
        'Monthly Quality Control Reports',
        'Project administrator management'
      ],
      icon: <BarChart className="w-12 h-12" />,
      frontColor: 'bg-gradient-to-br from-[#00a651] to-[#008a43]',
      backColor: 'bg-gradient-to-br from-[#008a43] to-[#00a651]'
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
            Comprehensive training programs designed to equip you with in-demand skills 
            and recognized qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
              frontColor={course.frontColor}
              backColor={course.backColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFlipCards;
