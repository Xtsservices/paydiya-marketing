import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Shield, Zap, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import logo from "../../assets/logo.png";

export function Hero() {
  const floatingStats = [
    { icon: TrendingUp, label: "99.9% Uptime", color: "emerald" },
    { icon: Shield, label: "Bank-Grade Security", color: "teal" },
    { icon: Zap, label: "Instant Settlements", color: "yellow" }
  ];

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50/30 via-40% to-yellow-50/50 overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-[95vh] flex items-center py-12 sm:py-16 lg:py-0">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
            style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl bg-gradient-to-br from-emerald-400/30 to-teal-500/20"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full blur-3xl bg-gradient-to-tl from-yellow-400/30 via-amber-300/20 to-orange-300/10"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-teal-400/20 to-cyan-500/10"
          animate={{ 
            scale: [1, 1.6, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="relative">
                <img src={logo} alt="Paydiya" className="w-16 h-16" />
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                </motion.div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Paydiya
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Accept Payments.
              </span>
              <br />
              <span className="text-gray-900">Anywhere. Anytime.</span>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              All-in-one payment solutions including <span className="font-semibold text-emerald-600">Payment Gateway</span>, 
              <span className="font-semibold text-emerald-600"> POS Machines</span>, and 
              <span className="font-semibold text-emerald-600"> UPI Sound Box</span> — built for Indian businesses.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg overflow-hidden shadow-xl shadow-emerald-500/30"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button 
                className="group relative border-2 border-emerald-600 text-emerald-600 px-10 py-4 rounded-2xl font-semibold text-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors">Request a Demo</span>
                <motion.div
                  className="absolute inset-0 bg-emerald-600"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white"></div>
                ))}
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Trusted by <span className="font-bold text-emerald-600">10,000+</span> businesses
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image with Floating Cards */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1758519289705-cf9fda8a9a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHBheW1lbnQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDYxODQwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Accept Payments Anywhere Anytime"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats Cards */}
            {floatingStats.map((stat, index) => (
              <motion.div
                key={index}
                className="absolute bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-gray-100"
                style={{
                  top: index === 0 ? '10%' : index === 1 ? '50%' : '80%',
                  left: index === 1 ? '-10%' : 'auto',
                  right: index !== 1 ? '-10%' : 'auto',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Live Status</p>
                    <p className="text-sm font-bold text-gray-900">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}