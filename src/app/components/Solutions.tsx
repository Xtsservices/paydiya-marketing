import { motion } from 'motion/react';
import { ArrowRight, CreditCard, Smartphone, Volume2, CheckCircle2, Sparkles } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: CreditCard,
      title: "Payment Gateway",
      headline: "Online Payments Made Simple",
      description: "Accept UPI, cards, net banking, and wallets through a secure and scalable payment gateway with real-time reporting and fast settlements.",
      features: [
        "UPI, Credit/Debit Cards, Net Banking",
        "Web & Mobile SDKs",
        "Secure APIs",
        "Real-time transaction dashboard"
      ],
      cta: "Learn More",
      image: "https://images.unsplash.com/photo-1743529628081-6777a326a4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0bGVzcyUyMHBheW1lbnQlMjBjdXN0b21lciUyMGNoZWNrb3V0fGVufDF8fHx8MTc3MDYxODQxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-emerald-500 via-teal-500 to-emerald-600",
      accentColor: "emerald",
      pattern: "diagonal"
    },
    {
      icon: Smartphone,
      title: "POS Machines",
      headline: "Smart POS for Offline Payments",
      description: "Modern POS machines that help your business accept card and UPI payments effortlessly, whether at a counter or on the move.",
      features: [
        "Card, QR & Contactless Payments",
        "Portable & Countertop Devices",
        "Transaction History",
        "Reliable Hardware"
      ],
      cta: "Explore POS",
      image: "https://images.unsplash.com/photo-1746723384038-906ba415dc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYXltZW50JTIwdGVybWluYWwlMjByZXRhaWx8ZW58MXx8fHwxNzcwNjE2MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-teal-500 via-cyan-500 to-teal-600",
      accentColor: "teal",
      pattern: "dots"
    },
    {
      icon: Volume2,
      title: "UPI Sound Box",
      headline: "Instant Voice Alerts for Every Payment",
      description: "Get real-time audio confirmation for UPI payments and eliminate payment disputes completely.",
      features: [
        "Loud & Clear Voice Alerts",
        "Works in Busy Environments",
        "Simple Setup",
        "Low Maintenance"
      ],
      cta: "View Sound Box",
      image: "https://images.unsplash.com/photo-1726607288637-a646ddd3814a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwbW9iaWxlJTIwcGF5bWVudHxlbnwxfHx8fDE3NzA2MTg0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-yellow-500 via-amber-500 to-yellow-600",
      accentColor: "yellow",
      pattern: "grid"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full blur-3xl bg-gradient-to-tr from-yellow-400/20 to-amber-500/20"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            Our Solutions
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            Complete Payment <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to accept, manage, and grow your payment operations
          </p>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <motion.div 
                  className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl shadow-2xl mb-6 ${
                      solution.accentColor === 'emerald' ? 'bg-emerald-500' :
                      solution.accentColor === 'teal' ? 'bg-teal-500' :
                      'bg-yellow-500'
                    }`}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <solution.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </motion.div>

                  <span className="inline-block text-sm font-bold uppercase tracking-wider text-emerald-600 mb-3">
                    {solution.title}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
                    {solution.headline}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {solution.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-lg font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button 
                    className={`group inline-flex items-center gap-3 bg-gradient-to-r ${solution.gradient} text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all`}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {solution.cta}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </motion.div>

                {/* Image */}
                <motion.div 
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-${solution.accentColor}-900/40 via-transparent to-transparent`}></div>
                    
                    {/* Overlay Badge */}
                    <motion.div
                      className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <p className="text-sm font-bold text-gray-900">Trusted by 1000+ businesses</p>
                    </motion.div>
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    className={`absolute -z-10 -bottom-6 -right-6 w-3/4 h-3/4 bg-gradient-to-br ${solution.gradient} rounded-3xl blur-2xl`}
                    style={{ opacity: 0.2 }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}