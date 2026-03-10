import React from 'react';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, ensuring our clients receive world-class training and consulting services."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices, building trust with every interaction."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our methods and embrace new technologies to deliver cutting-edge learning experiences."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2e3192] to-[#1e2570] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="text-[#ffdd00]">Juta Training</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Empowering excellence through innovative training and consulting solutions 
            that transform individuals and organizations worldwide.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2e3192]">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, Juta Training & Consulting emerged from a vision to bridge 
                  the gap between traditional education and real-world professional requirements. 
                  Our founders recognized that the rapidly evolving business landscape demanded 
                  a new approach to skill development.
                </p>
                <p>
                  Today, we stand as a leading provider of comprehensive training solutions, 
                  having successfully trained over 10,000 professionals and consulted with 
                  hundreds of organizations across diverse industries.
                </p>
                <p>
                  Our commitment to excellence, innovation, and measurable results has earned 
                  us recognition as a trusted partner for professional development and 
                  organizational transformation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Training session"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#00a651] text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-[#2e3192] p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2e3192]">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals and organizations with the skills, knowledge, and 
                confidence needed to excel in today's competitive landscape through 
                innovative training programs and strategic consulting services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-[#00a651] p-3 rounded-lg mr-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2e3192]">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in professional development and organizational 
                transformation, creating a world where every individual has the opportunity 
                to reach their full potential through quality education and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2e3192] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-[#2e3192] to-[#00a651] p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2e3192] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;