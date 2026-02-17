import { motion } from 'motion/react';
import { Receipt, CheckCircle2, Smartphone, Cloud, TrendingUp, FileText, BarChart3, Users, Zap, ShoppingCart, Package, Calculator } from 'lucide-react';

export function BillingAppsPage() {
  const features = [
    {
      icon: Receipt,
      title: "Digital Invoicing",
      description: "Create professional invoices in seconds with templates"
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Access your bills from anywhere, anytime securely"
    },
    {
      icon: Calculator,
      title: "GST Compliant",
      description: "Automated GST calculations and filing support"
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Track revenue, expenses, and profits in real-time"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Store customer details and purchase history"
    },
    {
      icon: Package,
      title: "Inventory Tracking",
      description: "Manage stock levels and get low-stock alerts"
    }
  ];

  const benefits = [
    {
      title: "Go Paperless",
      description: "Save time, money, and the environment with digital bills",
      icon: FileText
    },
    {
      title: "Get Paid Faster",
      description: "Send invoices instantly via WhatsApp, Email, or SMS",
      icon: Zap
    },
    {
      title: "Manage Everything",
      description: "Inventory, customers, payments - all in one app",
      icon: ShoppingCart
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for small businesses",
      features: ["50 invoices/month", "Basic templates", "Cloud storage", "Email support"]
    },
    {
      name: "Professional",
      price: "₹499/mo",
      description: "For growing businesses",
      features: ["Unlimited invoices", "Custom templates", "GST reports", "Inventory management", "Priority support"]
    },
    {
      name: "Enterprise",
      price: "₹1,999/mo",
      description: "For large businesses",
      features: ["Everything in Pro", "Multi-user access", "API access", "Advanced analytics", "Dedicated manager"]
    }
  ];

  const useCases = [
    { icon: ShoppingCart, title: "Retail Stores", desc: "POS + Billing" },
    { icon: Package, title: "Wholesalers", desc: "Bulk billing" },
    { icon: TrendingUp, title: "Service Providers", desc: "Professional invoices" },
    { icon: Users, title: "Freelancers", desc: "Client billing" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 right-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl bg-teal-500/15"
            animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl bg-emerald-500/15"
            animate={{ scale: [1, 1.3, 1], y: [0, 30, 0] }}
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
                className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Receipt className="w-5 h-5 text-teal-700" />
                <span className="text-teal-700 font-semibold text-sm">Billing Apps</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-gray-900">Smart Billing &</span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Invoicing Made Easy
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create professional invoices, manage inventory, track payments, and grow 
                your business with our all-in-one billing solution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download App
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["GST compliant", "Cloud backup", "Mobile & Web", "Free templates"].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
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
                  src="https://images.unsplash.com/photo-1753351054656-48517dde5059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwZGlnaXRhbCUyMGludm9pY2V8ZW58MXx8fHwxNzcwNjE4NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Billing Apps"
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
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-gray-600">Powerful features in one simple app</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Transform Your <span className="text-emerald-600">Business</span>
            </h2>
            <p className="text-xl text-gray-600">Work smarter, not harder</p>
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
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Choose Your <span className="text-emerald-600">Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-600">Flexible pricing for every business size</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  index === 1 ? 'ring-2 ring-emerald-500 scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {index === 1 && (
                  <div className="bg-emerald-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-black text-emerald-600 mb-2">{plan.price}</div>
                  {plan.price !== "Free" && <div className="text-sm text-gray-500">Billed monthly</div>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-3 rounded-xl font-semibold ${
                    index === 1
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white'
                      : 'border-2 border-emerald-600 text-emerald-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Built for All Businesses
            </h2>
            <p className="text-xl text-gray-600">From small shops to large enterprises</p>
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
      <section className="py-24 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Receipt className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Start Creating Invoices Today
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Join 100,000+ businesses using Paydiya Billing App
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Free forever plan", "No credit card", "Setup in 2 mins", "Cancel anytime"].map((item, index) => (
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
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}