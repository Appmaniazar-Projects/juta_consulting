import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  ChevronRight, 
  ChevronDown,
  MessageCircle,
  MessageSquare,
  RotateCcw,
  Award, 
  Laptop, 
  Server, 
  Code, 
  BarChart, 
  FileCheck 
} from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  features: string[];
  duration: string;
  students: string;
  rating: number;
  price: string;
  frontColor: string;
  backColor: string;
  icon: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  description, 
  features, 
  duration, 
  students, 
  rating, 
  price, 
  frontColor, 
  backColor,
  icon
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-96 w-full cursor-pointer group perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container */}
      <div 
        className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front of the card */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-2xl p-8 flex flex-col items-center justify-center ${frontColor} shadow-xl transition-all duration-300`}
          style={{
            background: `linear-gradient(135deg, ${frontColor.includes('from-[') ? 
              frontColor.split('from-[')[1].split(']')[0] : '#2e3192'}, ${
              frontColor.includes('to-[') ? 
              frontColor.split('to-[')[1].split(']')[0] : '#1a1e4e'
            })`,
            transform: 'rotateY(0deg)',
            zIndex: isFlipped ? 1 : 2
          }}
        >
          <div className={`text-6xl mb-6 transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-center text-white mb-2 px-4">{title}</h3>
          <div className="flex items-center text-white/90 mt-6 transition-all duration-300 transform group-hover:translate-y-1">
            <span className="font-medium">Click to learn more</span>
            <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-white/30'}`} 
              />
            ))}
          </div>
        </div>
        
        {/* Back of the card */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-2xl p-8 bg-white shadow-xl overflow-hidden flex flex-col`}
          style={{
            transform: 'rotateY(180deg)',
            zIndex: isFlipped ? 2 : 1,
            backfaceVisibility: 'hidden',
          }}
        >
          <div 
            className="h-2 -mx-8 -mt-8 mb-6 transition-all duration-300"
            style={{
              background: frontColor.includes('from-[') ? 
                `linear-gradient(90deg, ${frontColor.split('from-[')[1].split(']')[0]}, ${frontColor.split('to-[')[1].split(']')[0]})` :
                '#2e3192'
            }}
          ></div>
          <div className="flex-1 overflow-y-auto back-flip-scroll pr-2">
            <h4 className="text-xl font-bold mb-4 text-gray-800 text-center">{title}</h4>
            <p className="text-gray-600 mb-6 text-center">{description}</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h5 className="font-semibold text-gray-800 mb-3 text-center">Key Features:</h5>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center text-xs mb-3 text-gray-600">
              <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {duration}</span>
              <span className="flex items-center"><Users className="w-3 h-3 mr-1" /> {students}</span>
              <span className="flex items-center"><Star className="w-3 h-3 mr-1 text-yellow-400" /> {rating}</span>
            </div>
            <div className="font-bold text-xl text-center text-[#2e3192] mb-3">{price}</div>
            <div className="text-xs text-center text-gray-500 flex items-center justify-center">
              <RotateCcw className="w-3 h-3 mr-1" /> Click to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const courses = [
    {
      title: "ADMINISTRATION & PLANNING",
      description: "Master the essentials of business administration and strategic planning to drive organizational success.",
      features: [
        "Office Administration",
        "Strategic Planning",
        "Business Communication",
        "Time Management",
        "Team Leadership",
        "Project Coordination"
      ],
      duration: "8-12 weeks",
      students: "200+",
      rating: 4.8,
      price: "Contact us",
      frontColor: 'bg-gradient-to-br from-[#2e3192] to-[#1a1e4e]',
      backColor: 'bg-white',
      icon: <BookOpen className="w-12 h-12 text-white" />
    },
    {
      title: "PROJECT STRATEGIES",
      description: "Develop and implement effective project management strategies for successful project delivery.",
      features: [
        "Project Planning",
        "Risk Management",
        "Agile Methodologies",
        "Stakeholder Management",
        "Budget Control",
        "Quality Assurance"
      ],
      duration: "10 weeks",
      students: "150+",
      rating: 4.7,
      price: "Contact us",
      frontColor: 'bg-gradient-to-br from-[#00a651] to-[#008a43]',
      backColor: 'bg-white',
      icon: <Laptop className="w-12 h-12 text-white" />
    },
    {
      title: "MONITORING & REPORTING",
      description: "Master the skills to effectively monitor projects and create comprehensive reports.",
      features: [
        "KPI Tracking",
        "Data Analysis",
        "Report Writing",
        "Performance Metrics",
        "Data Visualization",
        "Stakeholder Updates"
      ],
      duration: "6-8 weeks",
      students: "120+",
      rating: 4.6,
      price: "Contact us",
      frontColor: 'bg-gradient-to-br from-[#ffc107] to-[#ffab00]',
      backColor: 'bg-white',
      icon: <BarChart className="w-12 h-12 text-[#2e3192]" />
    },
    {
      title: "LEARNERSHIP",
      description: "Comprehensive learnership programs that combine theoretical knowledge with practical workplace experience.",
      features: [
        "NQF-aligned Qualifications",
        "Workplace Experience",
        "Mentorship",
        "Career Guidance",
        "Certification",
        "Job Placement Support"
      ],
      duration: "12-24 months",
      students: "500+",
      rating: 4.9,
      price: "Contact us",
      frontColor: 'bg-gradient-to-br from-[#6c63ff] to-[#4a42e6]',
      backColor: 'bg-white',
      icon: <Award className="w-12 h-12 text-white" />
    },
    {
      title: "ACCREDITATION REGISTRATION",
      description: "Guidance and support for training providers seeking accreditation with various SETAs and QCTO.",
      features: [
        "SETA Accreditation",
        "QCTO Registration",
        "Documentation Support",
        "Quality Management",
        "Compliance Checking",
        "Site Audits"
      ],
      duration: "Varies",
      students: "N/A",
      rating: 4.8,
      price: "Contact us",
      frontColor: 'bg-gradient-to-br from-[#1e88e5] to-[#0d47a1]',
      backColor: 'bg-white',
      icon: <FileCheck className="w-12 h-12 text-white" />
    },
    {
      title: "COMPTIA",
      description: "Internationally recognized IT certifications to validate your technical skills and knowledge.",
      features: [
        "A+ Certification",
        "Network+ Certification",
        "Security+ Certification",
        "Cybersecurity",
        "Cloud Computing",
        "IT Infrastructure"
      ],
      duration: "12-16 weeks",
      students: "300+",
      rating: 4.8,
      price: "Contact us",
      frontColor: 'bg-gradient-to-br from-[#ff7043] to-[#f4511e]',
      backColor: 'bg-white',
      icon: <Server className="w-12 h-12 text-white" />
    },
    {
      title: "MICROSOFT",
      description: "Comprehensive training in Microsoft technologies and certification preparation.",
      features: [
        "Microsoft 365",
        "Azure Cloud",
        "Windows Server",
        "SQL Server",
        "Power Platform",
        "DevOps"
      ],
      duration: "8-12 weeks",
      students: "250+",
      rating: 4.7,
      price: "Contact us",
      frontColor: 'bg-gradient-to-br from-[#9c27b0] to-[#6a1b9a]',
      backColor: 'bg-white',
      icon: <Code className="w-12 h-12 text-white" />
    },
    {
      title: "CORPORATE TRAINING",
      description: "Customized training solutions designed to meet your organization's specific needs and objectives.",
      features: [
        "Needs Analysis",
        "Custom Curriculum",
        "On-site Training",
        "Virtual Training",
        "Skills Assessment",
        "ROI Measurement"
      ],
      duration: "Custom",
      students: "1000+",
      rating: 4.9,
      price: "Contact us",
      frontColor: 'bg-gradient-to-br from-[#e91e63] to-[#c2185b]',
      backColor: 'bg-white',
      icon: <Users className="w-12 h-12 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2e3192] to-[#1a1e4e] text-white py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ffdd00] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#00a651] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-[#ff6b6b] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-base font-medium text-[#ffdd00] border border-[#ffdd00]/30">
            Empowering Your Career Growth
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional <span className="text-[#ffdd00] bg-clip-text text-transparent bg-gradient-to-r from-[#ffdd00] to-[#ffab00]">Training Programs</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your future with our industry-leading training programs designed to give you the competitive edge in today's job market.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a 
              href="#courses" 
              className="px-8 py-4 bg-[#ffdd00] hover:bg-[#ffcc00] text-[#2e3192] font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
            >
              Explore Courses
              <ChevronDown className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold border-2 border-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Contact Us
              <MessageCircle className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#2e3192]">Training Programs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2e3192] to-[#00a651] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of professional development programs designed to meet industry demands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="h-96 transform transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">Can't find what you're looking for?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2e3192] to-[#00a651] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Request Custom Training
            <MessageSquare className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-[#2e3192]">Students Say</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2e3192] to-[#00a651] mx-auto mb-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The project management course transformed my career. The practical skills I learned helped me get promoted within 3 months!",
                author: "Thabo M.",
                role: "Project Manager",
                rating: 5
              },
              {
                quote: "Excellent training facilities and knowledgeable instructors. The CompTIA certification opened many doors for me in the IT industry.",
                author: "Lerato K.",
                role: "IT Support Specialist",
                rating: 5
              },
              {
                quote: "The learnership program provided me with both theoretical knowledge and practical experience that was invaluable for my career.",
                author: "Nomsa D.",
                role: "Business Analyst",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2e3192] to-[#00a651] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;