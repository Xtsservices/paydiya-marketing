import { motion } from 'motion/react';
import { TrendingUp, Users, Zap, Globe } from 'lucide-react';

export function ImpactStats() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Businesses",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: TrendingUp,
      value: "₹500Cr+",
      label: "Processed Monthly",
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime SLA",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Industries Served",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
            Our Impact at <span className="text-yellow-300">Scale</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Delivering measurable results for businesses, institutions, and governments across India
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-2xl`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Value - Animated Counter */}
                <motion.div 
                  className="text-5xl font-extrabold text-yellow-300 mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <p className="text-lg text-emerald-100 font-semibold">
                  {stat.label}
                </p>

                {/* Decorative Bottom Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-2xl text-white font-semibold mb-6">
            Building India's Digital Infrastructure Layer
          </p>
          <p className="text-lg text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Our vision is to create an integrated ecosystem where businesses, financial institutions, enterprises, and government organizations can seamlessly connect, transact, automate, and grow through technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
