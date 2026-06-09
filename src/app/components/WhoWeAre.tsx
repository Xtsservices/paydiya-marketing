import { motion } from 'motion/react';
import { Zap, Code, Shield, TrendingUp, Users, Globe } from 'lucide-react';

export function WhoWeAre() {
  const expertise = [
    { icon: Code, label: "Enterprise Software", desc: "Custom solutions & digital transformation" },
    { icon: Zap, label: "Payment Solutions", desc: "Secure payment infrastructure" },
    { icon: Shield, label: "Compliance", desc: "Banking & government standards" },
    { icon: TrendingUp, label: "Scalability", desc: "Enterprise-grade platforms" },
    { icon: Users, label: "Support", desc: "Dedicated technical teams" },
    { icon: Globe, label: "Global Ready", desc: "Multi-region deployment" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white to-stone-50 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-emerald-600 font-bold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-emerald-100 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Who We Are
            </motion.span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
              Technology. <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Payments.</span> Innovation.
            </h2>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Paydiya Fintech Solutions is more than a fintech company. We are a digital infrastructure partner helping organizations build, manage, and scale technology ecosystems through software development, payment solutions, enterprise applications, and digital transformation services.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our expertise spans fintech, healthcare, government technology, education, hospitality, energy, retail, and enterprise automation, enabling us to deliver solutions that create measurable business impact.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 text-lg">
                  To simplify technology and accelerate digital transformation through innovative, secure, and scalable solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700 text-lg">
                  To become India's most trusted digital infrastructure company powering businesses, institutions, and governments through technology and innovation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Expertise Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.1)" }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-4 shadow-lg"
                  whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h4 className="font-bold text-gray-900 mb-2">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
