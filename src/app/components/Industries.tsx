import { motion } from 'motion/react';
import { ShoppingBag, Heart, GraduationCap, Coffee, Warehouse, Briefcase } from 'lucide-react';

export function Industries() {
  const industries = [
    { 
      icon: ShoppingBag, 
      name: "Retail & Supermarkets",
      color: "emerald",
      description: "Point-of-sale excellence" 
    },
    { 
      icon: Heart, 
      name: "Healthcare & Clinics",
      color: "teal",
      description: "Secure patient payments" 
    },
    { 
      icon: GraduationCap, 
      name: "Education & Institutions",
      color: "emerald",
      description: "Student fee management" 
    },
    { 
      icon: Coffee, 
      name: "Restaurants & Cafés",
      color: "yellow",
      description: "Quick table payments" 
    },
    { 
      icon: Warehouse, 
      name: "E-commerce & Online",
      color: "teal",
      description: "Seamless checkouts" 
    },
    { 
      icon: Briefcase, 
      name: "Service Providers",
      color: "emerald",
      description: "Professional invoicing" 
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-emerald-600 font-bold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-emerald-100 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Trusted Everywhere
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            Built for <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Every Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powering payments across diverse industries with tailored solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 shadow-lg relative z-10 ${
                    industry.color === 'emerald' ? 'bg-emerald-500' :
                    industry.color === 'teal' ? 'bg-teal-500' :
                    'bg-yellow-500'
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <industry.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">
                  {industry.name}
                </h3>
                <p className="text-gray-600 relative z-10">{industry.description}</p>

                {/* Decorative Element */}
                <motion.div
                  className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-emerald-500/10"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-bl-full"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Don't see your industry? We've got you covered!
          </p>
          <motion.button
            className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors border-b-2 border-emerald-600 pb-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Our Experts →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}