import { motion } from 'motion/react';
import { Zap, Shield, DollarSign, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

export function WhyPaydiya() {
  const reasons = [
    {
      icon: Zap,
      title: "One platform for online & offline payments",
      description: "Manage all your payment channels from a single unified dashboard",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "Bank-grade security",
      description: "PCI-DSS compliant with advanced fraud detection and prevention",
      color: "from-teal-500 to-emerald-600"
    },
    {
      icon: DollarSign,
      title: "Transparent pricing",
      description: "No hidden fees, straightforward rates that scale with you",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: TrendingUp,
      title: "Business insights & reports",
      description: "Powerful analytics and AI-driven insights to grow your business",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Users,
      title: "Dedicated customer support",
      description: "24×7 support team always ready to help you succeed",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: CheckCircle2,
      title: "Industry-leading uptime",
      description: "99.9% uptime guaranteed with enterprise-grade infrastructure",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
        animate={{ 
          backgroundPosition: ['0px 0px', '40px 40px']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl bg-yellow-400/30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl bg-teal-400/30"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 40, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Additional decorative circles */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-emerald-500/10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-yellow-300 font-bold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Why Businesses Choose <span className="text-yellow-300">Paydiya</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Built for growth, designed for simplicity, trusted by thousands
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Icon Container */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl mb-6 shadow-2xl`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <reason.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white leading-tight group-hover:text-yellow-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-emerald-100 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"></div>
                
                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${reason.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { value: "10,000+", label: "Active Businesses" },
            { value: "₹500Cr+", label: "Processed Monthly" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl font-extrabold text-yellow-300 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-emerald-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}