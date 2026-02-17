import { motion } from 'motion/react';
import { Target, Eye, Award, Users, TrendingUp, Shield, Zap, Globe, Heart, Rocket, CheckCircle2, Building2, Sparkles, ArrowRight, Star, BarChart3, Trophy } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const stats = [
    { number: "500K+", label: "Active Merchants", icon: Users, color: "emerald" },
    { number: "₹50Cr+", label: "Daily Transactions", icon: TrendingUp, color: "teal" },
    { number: "99.9%", label: "Uptime Guarantee", icon: Zap, color: "yellow" },
    { number: "100+", label: "Cities Covered", icon: Globe, color: "emerald" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-grade security with PCI-DSS compliance to protect every transaction",
      color: "emerald"
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Constantly evolving with cutting-edge technology and features",
      color: "teal"
    },
    {
      icon: Heart,
      title: "Customer Centric",
      description: "Your success is our success – we're here to help you grow",
      color: "yellow"
    },
    {
      icon: CheckCircle2,
      title: "Transparency",
      description: "No hidden fees, clear pricing, and honest communication always",
      color: "emerald"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Founded",
      description: "Started with a vision to simplify digital payments for Indian businesses",
      color: "emerald",
      icon: Sparkles
    },
    {
      year: "2019",
      title: "10K Merchants",
      description: "Reached 10,000 merchants milestone and launched POS machines",
      color: "teal",
      icon: Users
    },
    {
      year: "2020",
      title: "UPI Sound Box",
      description: "Introduced UPI Sound Box, revolutionizing payment confirmations",
      color: "yellow",
      icon: Zap
    },
    {
      year: "2021",
      title: "100K Merchants",
      description: "Crossed 100,000 merchants and expanded to 50+ cities",
      color: "emerald",
      icon: TrendingUp
    },
    {
      year: "2022",
      title: "Funding Round",
      description: "Raised Series B funding to accelerate growth and innovation",
      color: "teal",
      icon: Rocket
    },
    {
      year: "2023",
      title: "500K Merchants",
      description: "Half a million merchants trust Paydiya for their payment needs",
      color: "yellow",
      icon: Trophy
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      description: "15+ years in fintech and digital payments"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      description: "Expert in payment technology and infrastructure"
    },
    {
      name: "Amit Patel",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      description: "Building products that merchants love"
    },
    {
      name: "Sneha Reddy",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      description: "Ensuring seamless merchant experience"
    }
  ];

  const awards = [
    {
      title: "Best Payment Solution 2023",
      org: "FinTech Awards India",
      icon: Award,
      color: "yellow"
    },
    {
      title: "Top 10 Startups 2022",
      org: "Economic Times",
      icon: TrendingUp,
      color: "emerald"
    },
    {
      title: "Innovation in Payments",
      org: "NASSCOM",
      icon: Rocket,
      color: "teal"
    },
    {
      title: "Customer Choice Award",
      org: "Merchant's Voice",
      icon: Heart,
      color: "yellow"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50/30 to-yellow-50/20 py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Animated Background Orbs */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 sm:w-[600px] sm:h-[600px] rounded-full blur-3xl bg-gradient-to-br from-emerald-400/25 to-teal-500/15"
            animate={{ scale: [1, 1.2, 1], y: [0, -30, 0], rotate: [0, 45, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 sm:w-[600px] sm:h-[600px] rounded-full blur-3xl bg-gradient-to-tl from-yellow-400/25 to-amber-300/15"
            animate={{ scale: [1, 1.3, 1], y: [0, 30, 0], rotate: [0, -45, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full blur-3xl bg-teal-400/10"
            animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-200 px-5 py-2.5 rounded-full mb-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Building2 className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
              <span className="text-emerald-700 font-bold text-sm">About Paydiya</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
              Empowering Businesses <br className="hidden sm:block" />with{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Seamless Payments
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed px-4">
              Founded in 2018, Paydiya has been on a mission to simplify digital payments. <br className="hidden sm:block" />
              <span className="font-semibold text-emerald-600">Every business deserves world-class payment technology.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.button
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl border-2 border-gray-200 hover:border-emerald-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 lg:p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-200 transition-all shadow-lg hover:shadow-xl text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg ${
                    stat.color === 'emerald' ? 'bg-emerald-500' :
                    stat.color === 'teal' ? 'bg-teal-500' :
                    'bg-yellow-500'
                  }`}>
                    <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-600">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.05),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 hover:border-emerald-300 transition-all relative overflow-hidden h-full"
                whileHover={{ y: -8, scale: 1.01 }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500 mb-6 sm:mb-8 shadow-xl"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                  </motion.div>
                  
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">Our Mission</h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    To democratize digital payments by providing secure, affordable, and 
                    easy-to-use payment solutions for businesses of all sizes. We strive to 
                    enable every merchant to accept digital payments effortlessly and grow 
                    their business in the digital economy.
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-bl-full"></div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 hover:border-yellow-300 transition-all relative overflow-hidden h-full"
                whileHover={{ y: -8, scale: 1.01 }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-yellow-500 mb-6 sm:mb-8 shadow-xl"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                  </motion.div>
                  
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">Our Vision</h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    To become India's most trusted and merchant-friendly payment platform, 
                    powering millions of businesses with innovative payment technology. We 
                    envision a cashless future where every transaction is secure, instant, 
                    and hassle-free.
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-white to-teal-50/30 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Star className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm">Our Values</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Core <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-emerald-300 transition-all h-full text-center relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                    value.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-teal-50' :
                    value.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-emerald-50' :
                    'bg-gradient-to-br from-yellow-50 to-amber-50'
                  }`}></div>

                  <div className="relative z-10">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl ${
                        value.color === 'emerald' ? 'bg-emerald-500' :
                        value.color === 'teal' ? 'bg-teal-500' :
                        'bg-yellow-500'
                      }`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <value.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-5 h-5 text-teal-600" />
              <span className="text-teal-700 font-bold text-sm">Our Journey</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Growth <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Milestones</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key achievements in our success story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-yellow-500 -translate-x-1/2"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-1"></div>
                  
                  {/* Year Badge */}
                  <motion.div 
                    className={`relative w-28 h-28 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 z-10 shadow-2xl ${
                      milestone.color === 'emerald' ? 'bg-emerald-500' :
                      milestone.color === 'teal' ? 'bg-teal-500' :
                      'bg-yellow-500'
                    }`}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <milestone.icon className="w-8 h-8 text-white mb-1" strokeWidth={2.5} />
                    <span className="text-white font-black text-xl">{milestone.year}</span>
                  </motion.div>

                  <div className="flex-1">
                    <motion.div
                      className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-emerald-300 transition-all"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <h3 className="text-3xl font-black text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{milestone.description}</p>

                      {/* Accent Bar */}
                      <div className={`mt-6 h-1.5 w-20 rounded-full ${
                        milestone.color === 'emerald' ? 'bg-emerald-500' :
                        milestone.color === 'teal' ? 'bg-teal-500' :
                        'bg-yellow-500'
                      }`}></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Users className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-700 font-bold text-sm">Our Team</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Leadership <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the people driving innovation at Paydiya
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-emerald-300 transition-all"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-emerald-600/90 via-emerald-600/40 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-emerald-600 font-bold mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-white to-teal-50/30 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Trophy className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-700 font-bold text-sm">Recognition</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Awards & <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Honored to be recognized by industry leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-yellow-300 transition-all text-center h-full relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                    award.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-amber-50' :
                    award.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-teal-50' :
                    'bg-gradient-to-br from-teal-50 to-emerald-50'
                  }`}></div>

                  <div className="relative z-10">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl ${
                        award.color === 'yellow' ? 'bg-yellow-500' :
                        award.color === 'emerald' ? 'bg-emerald-500' :
                        'bg-teal-500'
                      }`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <award.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{award.title}</h3>
                    <p className="text-sm text-gray-600 font-semibold">{award.org}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: '200% 100%' }}
        />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.08)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]"></div>
        
        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-yellow-400/20 blur-2xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-8"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="w-10 h-10 text-white" strokeWidth={2.5} />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Join Us on This Journey
            </h2>
            <p className="text-xl sm:text-2xl text-emerald-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Be part of <span className="font-bold text-yellow-300">India's digital payment revolution</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-yellow-50 transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="bg-emerald-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-emerald-900 transition-colors border-2 border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {["No Setup Fees", "24/7 Support", "Trusted by 500K+"].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-bold text-white">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}