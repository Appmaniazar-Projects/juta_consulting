import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "JUTA's training transformed my career. The hands-on approach helped me land a job within weeks of completing the course.",
    author: "Thabo Mbeki",
    role: "Software Developer",
    rating: 5
  },
  {
    quote: "The instructors are industry experts who genuinely care about your success. Best investment in my education!",
    author: "Nomsa Dlamini",
    role: "IT Consultant",
    rating: 5
  },
  {
    quote: "Practical skills that I could immediately apply at work. The cloud computing course was particularly outstanding.",
    author: "Lerato Khumalo",
    role: "Cloud Engineer",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2e3192] to-[#1e2570] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-[#ffdd00]">Students Say</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join thousands of successful graduates who've transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#ffdd00] fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-gray-300">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
