import { motion } from 'motion/react';
import { Volume2, CheckCircle2, Zap, Shield, Battery, Wifi, Speaker, Bell, TrendingUp, Store, Coffee, ShoppingBag } from 'lucide-react';

export function SoundBoxPage() {
  const features = [
    {
      icon: Speaker,
      title: "Crystal Clear Sound",
      description: "Loud and clear voice alerts audible in noisy environments"
    },
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "Works up to 7 days on a single charge"
    },
    {
      icon: Wifi,
      title: "4G Connectivity",
      description: "Built-in SIM with reliable 4G network"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security with encrypted connections"
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Real-time voice confirmation for every payment"
    },
    {
      icon: Bell,
      title: "Multi-Language",
      description: "Supports Hindi, English, and regional languages"
    }
  ];

  const benefits = [
    {
      title: "Eliminate Payment Disputes",
      description: "Never miss a payment with instant voice confirmations",
      icon: CheckCircle2
    },
    {
      title: "Work Hands-Free",
      description: "Focus on customers while Sound Box confirms payments",
      icon: Zap
    },
    {
      title: "Works Everywhere",
      description: "Perfect for busy markets, shops, and restaurants",
      icon: Store
    }
  ];

  const useCases = [
    { icon: Store, title: "Retail Shops", desc: "Never miss a payment" },
    { icon: Coffee, title: "Food Stalls", desc: "Quick confirmations" },
    { icon: ShoppingBag, title: "Kirana Stores", desc: "Hassle-free billing" },
    { icon: TrendingUp, title: "Service Centers", desc: "Instant alerts" }
  ];

  const specifications = [
    { label: "Volume", value: "Up to 90 dB" },
    { label: "Battery", value: "7 days backup" },
    { label: "Connectivity", value: "4G + WiFi" },
    { label: "Languages", value: "10+ supported" },
    { label: "Warranty", value: "1 year included" },
    { label: "Weight", value: "Light & portable" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-emerald-50 py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl bg-yellow-400/20"
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-emerald-500/15"
            animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Volume2 className="w-5 h-5 text-yellow-700" />
                <span className="text-yellow-700 font-semibold text-sm">UPI Sound Box</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-gray-900">Never Miss a</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-600 to-emerald-600 bg-clip-text text-transparent">
                  Payment Again
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get instant voice alerts for every UPI payment. Loud, clear, and works 
                in the busiest environments. Perfect for shops, restaurants, and businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="bg-gradient-to-r from-yellow-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Sound Box
                </motion.button>
                <motion.button
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </motion.button>
              </div>

              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
                <div className="text-3xl font-black text-emerald-600 mb-2">₹999 only</div>
                <div className="text-gray-700 font-medium">One-time cost • Lifetime support included</div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-50 to-emerald-50 p-8">
                {/* Sound Box Device Mockup */}
                <div className="bg-white rounded-2xl p-8 shadow-xl mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 w-64 h-64 flex flex-col items-center justify-center shadow-2xl">
                      {/* Paydiya Branding */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2">
                        <div className="bg-white px-4 py-2 rounded-lg">
                          <span className="text-emerald-600 font-black text-lg">Paydiya</span>
                        </div>
                      </div>
                      
                      {/* Speaker Grille */}
                      <div className="grid grid-cols-8 gap-1.5 mb-4">
                        {[...Array(40)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        ))}
                      </div>
                      
                      {/* Volume Icon */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Volume2 className="w-16 h-16 text-yellow-400" />
                      </motion.div>
                      
                      {/* Status Light */}
                      <motion.div
                        className="absolute bottom-4 w-3 h-3 bg-yellow-400 rounded-full"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </div>
                  
                  {/* Payment Confirmation Text */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 px-6 py-3 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">
                        "₹500 प्राप्त हुए" (Payment Received)
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Store Context */}
                <img 
                  src="https://images.unsplash.com/photo-1736901217584-288ee5b71cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzaG9wJTIwY291bnRlciUyMHBheW1lbnR8ZW58MXx8fHwxNzcwNjE4NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Retail Store with UPI Sound Box"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>

              {/* Floating Sound Animation */}
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-500 p-4 rounded-full shadow-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Speaker className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Powerful Features, Simple Design
            </h2>
            <p className="text-xl text-gray-600">Everything you need for payment confirmations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-yellow-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                  <feature.icon className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Why Businesses <span className="text-emerald-600">Love It</span>
            </h2>
            <p className="text-xl text-gray-600">The smartest way to confirm payments</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">Built with quality and reliability</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-yellow-50 p-6 rounded-2xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="text-sm text-gray-600 mb-2">{spec.label}</div>
                <div className="text-xl font-bold text-gray-900">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-600">Trusted across India</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Volume2 className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Start Confirming Payments Today
            </h2>
            <p className="text-xl mb-8 text-yellow-50">
              Join 50,000+ businesses using Paydiya Sound Box
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["₹999 only", "Free delivery", "Easy setup", "1 year warranty"].map((item, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <motion.button
              className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}