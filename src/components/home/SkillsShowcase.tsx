import { motion } from 'framer-motion';
import { Code, Server, Database, Shield, Cloud, Smartphone } from 'lucide-react';

const skills = [
  { name: 'Web Development', icon: Code, color: '#3b82f6', description: 'Modern web applications' },
  { name: 'Cloud Computing', icon: Cloud, color: '#8b5cf6', description: 'AWS, Azure & GCP' },
  { name: 'Cybersecurity', icon: Shield, color: '#10b981', description: 'Security first approach' },
  { name: 'Mobile Development', icon: Smartphone, color: '#ec4899', description: 'iOS & Android' },
  { name: 'DevOps', icon: Server, color: '#f59e0b', description: 'CI/CD & Automation' },
  { name: 'Data Science', icon: Database, color: '#6366f1', description: 'AI & Analytics' },
];

const SkillsShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2e3192] to-[#00a651]">
              In-Demand Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master the technologies that power the future
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-white"
                  style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                >
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-500">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
