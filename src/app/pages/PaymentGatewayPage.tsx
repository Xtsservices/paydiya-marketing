import { motion } from 'motion/react';
import { CreditCard, Shield, Zap, CheckCircle2, Globe, Lock, TrendingUp, Users, Code, Smartphone, ArrowRight } from 'lucide-react';

export function PaymentGatewayPage() {
  const features = [
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description: "Accept UPI, Credit/Debit Cards, Net Banking, and Digital Wallets"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "PCI-DSS compliant with end-to-end encryption"
    },
    {
      icon: Zap,
      title: "Instant Settlements",
      description: "Get your money in 24-48 hours with T+1 settlement"
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Accept payments in multiple currencies globally"
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Easy integration with REST APIs and SDKs"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Track every transaction with detailed insights"
    }
  ];

  const integrationSteps = [
    {
      number: "01",
      title: "Sign Up & Get API Keys",
      description: "Create your account and receive your unique API credentials instantly"
    },
    {
      number: "02",
      title: "Integrate Payment APIs",
      description: "Use our SDKs or REST APIs to integrate payments in minutes"
    },
    {
      number: "03",
      title: "Test & Go Live",
      description: "Test in sandbox mode, then activate your live account"
    },
    {
      number: "04",
      title: "Start Accepting Payments",
      description: "Begin processing payments with instant notifications"
    }
  ];

  const useCases = [
    { icon: Globe, title: "E-commerce Websites", desc: "Online stores & marketplaces" },
    { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android applications" },
    { icon: Users, title: "SaaS Platforms", desc: "Subscription & recurring billing" },
    { icon: TrendingUp, title: "Digital Services", desc: "Content & service platforms" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl bg-emerald-500/15"
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl bg-yellow-400/15"
            animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CreditCard className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold text-sm">Payment Gateway</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-gray-900">Accept Online</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Payments Instantly
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A powerful payment gateway that lets you accept UPI, cards, net banking, 
                and wallets with seamless integration and instant settlements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Free
                </motion.button>
                <motion.button
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Documentation
                </motion.button>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 font-medium">No Setup Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 font-medium">Quick Integration</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1706827183359-6b015aaad56c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3MlMjB0ZXJtaW5hbCUyMHBheW1lbnQlMjBjYXJkfGVufDF8fHx8MTc3MDYxODQxMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Payment Gateway"
                  className="w-full h-auto"
                />
              </div>
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
              Powerful Features for Your Business
            </h2>
            <p className="text-xl text-gray-600">Everything you need to accept online payments</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Easy Integration in <span className="text-emerald-600">4 Steps</span>
            </h2>
            <p className="text-xl text-gray-600">Get started in minutes, not hours</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-6xl font-black text-emerald-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {index < integrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-emerald-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
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
            <p className="text-xl text-gray-600">Trusted by businesses across industries</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow"
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
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Ready to Start Accepting Payments?
            </h2>
            <p className="text-xl mb-8 text-emerald-50">
              Join thousands of businesses using Paydiya Payment Gateway
            </p>
            <motion.button
              className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}