import { motion } from 'motion/react';
import { Hospital, Building2, UtensilsCrossed, BarChart3, BookOpen, Package, Utensils, Eye, Sun, ArrowRight } from 'lucide-react';

export function Products() {
  const products = [
    {
      icon: Hospital,
      title: "Health & Hospital Management",
      description: "Comprehensive healthcare platform enabling hospitals to digitize operations, manage appointments, streamline billing, and maintain electronic medical records.",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: Building2,
      title: "Municipal Governance Platform",
      description: "Smart governance solution supporting municipal administration, citizen engagement, revenue collection, and digital service delivery.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: UtensilsCrossed,
      title: "Canteen & Retail Management",
      description: "End-to-end management for canteens and retail stores with inventory, billing, procurement, and member management capabilities.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: BarChart3,
      title: "Collection & Recovery Management",
      description: "Advanced platform designed to automate collections, monitor recoveries, and streamline payment tracking with full visibility.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: BookOpen,
      title: "Education & Student Management",
      description: "Digital ecosystem for educational institutions to manage students, attendance, academics, communication, and administration.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Package,
      title: "Inventory Management System",
      description: "Centralized inventory platform enabling businesses to optimize stock management, procurement, warehousing, and supply chain.",
      color: "from-yellow-500 to-lime-600"
    },
    {
      icon: Utensils,
      title: "Restaurant & Hospitality Platform",
      description: "Technology platform for restaurants and hospitality businesses to streamline orders, billing, inventory, and customer engagement.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Eye,
      title: "Visitor Management System",
      description: "Secure visitor registration and access control solution for enterprises, institutions, and government organizations.",
      color: "from-slate-500 to-gray-600"
    },
    {
      icon: Sun,
      title: "Solar Monitoring & Management",
      description: "Smart platform enabling real-time monitoring, performance analytics, maintenance tracking, and management of solar energy systems.",
      color: "from-yellow-400 to-amber-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-stone-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20"
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-yellow-400/20 to-amber-500/20"
        animate={{ 
          scale: [1, 1.3, 1],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
            className="inline-block text-emerald-600 font-bold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-emerald-100 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Our Products & Platforms
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            Industry-Leading <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive platforms powering businesses across healthcare, education, retail, government, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <motion.div
                className="relative bg-white rounded-2xl p-8 border border-gray-200 h-full overflow-hidden hover:border-emerald-300 transition-colors"
                whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(16, 185, 129, 0.15)" }}
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg bg-gradient-to-br ${product.color}`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <product.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                  {product.title}
                </h3>
                <p className="text-gray-600 relative z-10 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* CTA Arrow */}
                <motion.div
                  className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors relative z-10"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/5 to-transparent rounded-bl-full pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Product Demo
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
