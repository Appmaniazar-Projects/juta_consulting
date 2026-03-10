import React from 'react';
import { Star, Zap, Shield } from 'lucide-react';

const UniqueValue = () => {
  const uniqueFeatures = [
    {
      icon: Star,
      title: "Industry-Leading Expertise",
      description: "Our trainers are seasoned professionals with decades of real-world experience across various industries, ensuring you learn from the best.",
      color: "text-[#ffdd00]",
      bgColor: "bg-[#ffdd00]"
    },
    {
      icon: Zap,
      title: "Accelerated Learning Methods",
      description: "We use cutting-edge pedagogical techniques and technology-enhanced learning to maximize knowledge retention and skill acquisition in minimal time.",
      color: "text-[#00a651]",
      bgColor: "bg-[#00a651]"
    },
    {
      icon: Shield,
      title: "Guaranteed Results",
      description: "We stand behind our training with measurable outcomes and certification programs that are recognized by leading industry organizations worldwide.",
      color: "text-[#ed1c24]",
      bgColor: "bg-[#ed1c24]"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2e3192] mb-4">
            What Makes Us Unique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three distinctive advantages that set Juta Training & Consulting apart 
            from other training providers in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {uniqueFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 ${feature.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#2e3192] mb-4 group-hover:text-[#00a651] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${feature.bgColor} rounded-full opacity-10 -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UniqueValue;