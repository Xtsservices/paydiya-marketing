import { motion } from 'motion/react';
import { UserPlus, Settings, Zap } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: "Sign Up & Complete KYC",
      description: "Quick and simple onboarding process with instant verification",
      color: "from-emerald-500 to-teal-600"
    },
    {
      number: 2,
      icon: Settings,
      title: "Choose Your Solutions",
      description: "Select payment gateway, POS, Sound Box, or all three",
      color: "from-teal-500 to-emerald-600"
    },
    {
      number: 3,
      icon: Zap,
      title: "Go Live & Start Accepting Payments",
      description: "Begin processing payments immediately and grow your revenue",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
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
            Simple Process
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            How It <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps and transform your payment experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-yellow-200 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Number Badge */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white text-2xl font-bold mb-6 shadow-lg ${
                    step.number === 1 ? 'bg-emerald-500' :
                    step.number === 2 ? 'bg-teal-500' :
                    'bg-yellow-500'
                  }`}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {step.number}
                </motion.div>
                
                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-xl ${
                    step.number === 1 ? 'bg-emerald-500' :
                    step.number === 2 ? 'bg-teal-500' :
                    'bg-yellow-500'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2, type: "spring" }}
                >
                  <step.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Decorative Corner */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl bg-emerald-500/20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-24 -right-6 z-10"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-emerald-500 shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}