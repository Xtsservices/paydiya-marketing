import { motion } from 'motion/react';
import { TrendingUp, Download, Clock, BarChart3, PieChart, Activity, FileText } from 'lucide-react';

export function Dashboard() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time reports",
      description: "Monitor all transactions as they happen with live updates",
      color: "emerald"
    },
    {
      icon: TrendingUp,
      title: "Business analytics",
      description: "Get insights into customer behavior, trends, and revenue patterns",
      color: "teal"
    },
    {
      icon: FileText,
      title: "Downloadable statements",
      description: "Export data for accounting and compliance in multiple formats",
      color: "yellow"
    }
  ];

  const stats = [
    { icon: BarChart3, label: "Revenue Analytics", value: "↑ 24%" },
    { icon: PieChart, label: "Success Rate", value: "98.5%" },
    { icon: Activity, label: "Active Today", value: "1,234" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
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
              Powerful Dashboard
            </motion.span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
              Manage All Payments from{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                One Dashboard
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Track transactions, settlements, and performance insights in real time with Paydiya's 
              intuitive and powerful dashboard.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="group flex items-start gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                      feature.color === 'emerald' ? 'bg-emerald-500' :
                      feature.color === 'teal' ? 'bg-teal-500' :
                      'bg-yellow-500'
                    }`}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Dashboard Features
            </motion.button>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MDUzNjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dashboard Preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>

            {/* Floating Stats Cards */}
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="absolute bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-gray-100"
                style={{
                  top: index === 0 ? '10%' : index === 1 ? '45%' : '75%',
                  right: index === 1 ? '-8%' : 'auto',
                  left: index !== 1 ? '-8%' : 'auto',
                }}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                    <p className="text-lg font-black text-emerald-600">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative Glow */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full blur-3xl -z-10 bg-yellow-400/20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}