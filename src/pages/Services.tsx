import React from 'react';
import { BookOpen, Users, Briefcase, Target, CheckCircle, ArrowRight, Clock, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      icon: BookOpen,
      title: "Individual Training Programs",
      description: "Personalized learning experiences designed to accelerate your professional growth and career advancement.",
      programs: [
        "Professional Certification Courses",
        "Technical Skills Bootcamps",
        "Leadership Development",
        "Digital Transformation",
        "Project Management",
        "Data Science & Analytics"
      ],
      color: "bg-[#2e3192]"
    },
    {
      icon: Users,
      title: "Corporate Training Solutions",
      description: "Comprehensive workforce development programs tailored to your organization's specific needs and objectives.",
      programs: [
        "Team Building Workshops",
        "Custom Curriculum Development",
        "Executive Coaching",
        "Change Management Training",
        "Innovation Workshops",
        "Performance Enhancement"
      ],
      color: "bg-[#00a651]"
    },
    {
      icon: Briefcase,
      title: "Business Consulting",
      description: "Strategic advisory services to help organizations optimize operations and achieve sustainable growth.",
      programs: [
        "Business Process Re-engineering",
        "Digital Strategy Consulting",
        "Organizational Development",
        "Performance Management Systems",
        "Quality Assurance Programs",
        "Risk Management Solutions"
      ],
      color: "bg-[#ed1c24]"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with a comprehensive assessment of your needs and objectives."
    },
    {
      step: "02", 
      title: "Custom Program Design",
      description: "Our experts create a tailored training program specifically for your requirements."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We deliver engaging, interactive training sessions with measurable outcomes."
    },
    {
      step: "04",
      title: "Follow-up & Support",
      description: "Continuous support and progress tracking to ensure lasting results."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2e3192] to-[#1e2570] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Professional <span className="text-[#ffdd00]">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive training and consulting solutions designed to unlock potential 
            and drive measurable results for individuals and organizations.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2e3192] mb-4">Our Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of professional development and consulting services.
            </p>
          </div>

          <div className="space-y-12">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`${category.color} p-3 rounded-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#2e3192]">{category.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">{category.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {category.programs.map((program, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#00a651] flex-shrink-0" />
                          <span className="text-sm text-gray-700">{program}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to="/contact"
                      className="inline-flex items-center text-[#00a651] hover:text-[#059669] font-semibold transition-colors duration-300 group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  <div className={`relative ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square lg:aspect-[4/3]">
                      <img 
                        src={index === 0 
                          ? "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                          : index === 1 
                          ? "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                          : "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                        }
                        alt={category.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2e3192] mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes for every training initiative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-[#ffdd00] mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-[#2e3192] mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#00a651] transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#00a651] to-[#059669] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Skills?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our services can help you achieve your professional goals.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-[#00a651] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;