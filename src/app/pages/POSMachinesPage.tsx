import { motion } from 'motion/react';
import { Smartphone, Wifi, Battery, CreditCard, QrCode, CheckCircle2, Zap, Shield, Clock, Package, TrendingUp, Store } from 'lucide-react';
import posImage from "../../assets/pos-machine.png";

export function POSMachinesPage() {
  const features = [
    {
      icon: CreditCard,
      title: "All Payment Methods",
      description: "Accept cards, UPI, QR codes, and contactless payments"
    },
    {
      icon: Wifi,
      title: "4G Connectivity",
      description: "Built-in 4G with WiFi and Bluetooth support"
    },
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "Up to 8 hours of continuous usage on single charge"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "EMV certified with end-to-end encryption"
    },
    {
      icon: Zap,
      title: "Instant Settlements",
      description: "Get your money in 24-48 hours automatically"
    },
    {
      icon: Clock,
      title: "Transaction History",
      description: "View and manage all transactions on device"
    }
  ];

  const deviceTypes = [
    {
      name: "Portable POS",
      description: "Perfect for field sales and delivery agents",
      features: ["Compact design", "Built-in printer", "Long battery life", "4G enabled"],
      price: "₹2,999/month"
    },
    {
      name: "Countertop POS",
      description: "Ideal for retail stores and restaurants",
      features: ["Large display", "Fast processing", "Multiple connectivity", "Premium build"],
      price: "₹3,999/month"
    },
    {
      name: "Android POS",
      description: "Smart POS with app ecosystem",
      features: ["Run business apps", "Cloud sync", "Advanced features", "Future ready"],
      price: "₹4,999/month"
    }
  ];

  const useCases = [
    { icon: Store, title: "Retail Stores", desc: "Quick checkout experience" },
    { icon: Package, title: "Restaurants", desc: "Table-side billing" },
    { icon: TrendingUp, title: "Field Sales", desc: "On-the-go payments" },
    { icon: Smartphone, title: "Delivery Services", desc: "Doorstep collections" }
  ];

  const benefits = [
    "Zero setup cost",
    "Free installation",
    "24/7 support",
    "Instant activation",
    "No hidden charges",
    "Easy replacement"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-yellow-50 py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 right-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl bg-emerald-500/15"
            animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl bg-yellow-400/15"
            animate={{ scale: [1, 1.3, 1], y: [0, 30, 0] }}
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
                className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Smartphone className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold text-sm">POS Machines</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-gray-900">Smart POS for</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Modern Business
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Accept card, UPI, and contactless payments with our advanced POS machines. 
                Perfect for retail, restaurants, and on-the-go businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order POS Machine
                </motion.button>
                <motion.button
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Compare Models
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Zero setup fee", "Free delivery", "24/7 support", "Instant setup"].map((benefit, index) => (
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-white p-8">
                <img 
                  src={posImage}
                  alt="Paydiya POS Machines"
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
              Advanced Features Built-In
            </h2>
            <p className="text-xl text-gray-600">Everything you need in one device</p>
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

      {/* Device Types */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Choose Your <span className="text-emerald-600">Perfect POS</span>
            </h2>
            <p className="text-xl text-gray-600">Flexible plans for every business size</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {deviceTypes.map((device, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{device.name}</h3>
                <p className="text-gray-600 mb-6">{device.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-black text-emerald-600 mb-2">{device.price}</div>
                  <div className="text-sm text-gray-500">All-inclusive rental</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {device.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Order Now
                </motion.button>
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
              Built for Your Industry
            </h2>
            <p className="text-xl text-gray-600">Trusted across diverse businesses</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-emerald-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow"
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
              Get Your POS Machine Today
            </h2>
            <p className="text-xl mb-8 text-emerald-50">
              Free installation • Zero setup cost • 24/7 support included
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
            <motion.button
              className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order POS Machine
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}