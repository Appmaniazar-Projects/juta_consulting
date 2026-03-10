import React from 'react';
import { ArrowRight, GraduationCap, Target, Users, Award } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2e3192] via-[#1e2570] to-[#0f1340] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-2 bg-[#00a651]/20 text-[#00ff88] text-sm font-semibold rounded-full">
              <GraduationCap className="inline-block w-4 h-4 mr-2" />
              100% Black Owned & Women Led
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering South Africa's
              <span className="block text-[#ffdd00] mt-2">Digital Workforce</span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join our mission to train 100,000 students by 2036 with industry-relevant IT skills and nationally recognized qualifications.
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#00a651]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#2e3192] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#ffdd00]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading provider of transformative training and skills development solutions, recognized for our excellence in program delivery and learner success.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#00a651]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#00a651] rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-[#ffdd00]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To deliver innovative, high-quality training programs that equip individuals with practical skills and knowledge needed to excel in their careers.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#ffdd00] mb-2">100K+</div>
              <p className="text-gray-300">Students to be trained by 2036</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#ffdd00] mb-2">5+</div>
              <p className="text-gray-300">NQF Accredited Programs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#ffdd00] mb-2">100%</div>
              <p className="text-gray-300">Practical Skills Focus</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="#courses" 
              className="group bg-gradient-to-r from-[#ffdd00] to-[#ffc107] text-[#2e3192] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#ffdd00]/30 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1"
            >
              View Our Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact" 
              className="group bg-transparent border-2 border-[#00a651] text-[#00a651] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00a651]/10 transition-all duration-300 flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <p className="text-center text-gray-300 text-sm mb-12">
            Accredited by MICT SETA | SAQA & QCTO Aligned | B-BBEE Level 1 Contributor
          </p>
          
          {/* Impact Banner */}
          <div className="relative bg-gradient-to-r from-[#00a651] to-[#2e8b57] p-8 rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="relative z-10 text-center">
              <div className="inline-block mb-4 px-4 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                B-BBEE Level 1 Contributor
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Empowering South Africa's <span className="text-[#ffdd00]">Digital Future</span>
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                As a 100% Black Owned & Women Led organization, we're committed to transforming lives through quality IT education and skills development.
              </p>
              <a 
                href="#about" 
                className="inline-block bg-white text-[#00a651] px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;