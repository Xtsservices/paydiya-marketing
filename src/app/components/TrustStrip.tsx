import { motion } from 'motion/react';
import { Shield, Zap, Headphones, Code } from 'lucide-react';

export function TrustStrip() {
  const features = [
    { icon: Shield, text: "Secure & RBI-compliant", color: "emerald" },
    { icon: Zap, text: "Fast Settlements", color: "yellow" },
    { icon: Headphones, text: "24×7 Support", color: "teal" },
    { icon: Code, text: "Easy Integration", color: "emerald" }
  ];

  return (
    <section className="relative py-12 bg-white border-y border-gray-100 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-transparent to-yellow-50"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className={`w-14 h-14 rounded-2xl ${
                  feature.color === 'emerald' ? 'bg-emerald-500' : 
                  feature.color === 'yellow' ? 'bg-yellow-500' : 
                  feature.color === 'teal' ? 'bg-teal-500' : 'bg-emerald-500'
                } flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </motion.div>
              <span className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}