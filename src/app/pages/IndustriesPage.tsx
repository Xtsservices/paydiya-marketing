import { motion } from 'motion/react';
import { ShoppingBag, Heart, GraduationCap, Coffee, Warehouse, Briefcase, Building2, Car, Home, Utensils, Dumbbell, Plane, CheckCircle2, ArrowRight, TrendingUp, Users, Zap, Shield, Star, Sparkles, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);

  const industries = [
    {
      icon: ShoppingBag,
      name: "Retail & Supermarkets",
      color: "emerald",
      tagline: "Modern Retail Payments",
      description: "Complete payment solutions for retail stores and supermarkets",
      features: [
        "Quick checkout with POS systems",
        "Barcode scanning integration",
        "Inventory management",
        "Multi-counter support",
        "Customer loyalty programs"
      ],
      stats: { merchants: "50K+", transactions: "10M+/month", growth: "+45%" }
    },
    {
      icon: Coffee,
      name: "Restaurants & Cafés",
      color: "yellow",
      tagline: "Dining Made Digital",
      description: "Streamline payments for food and beverage businesses",
      features: [
        "Table-side billing with mobile POS",
        "Split bill functionality",
        "Kitchen order integration",
        "QR code ordering",
        "Tip management"
      ],
      stats: { merchants: "30K+", transactions: "5M+/month", growth: "+52%" }
    },
    {
      icon: Heart,
      name: "Healthcare & Clinics",
      color: "teal",
      tagline: "Secure Medical Billing",
      description: "Secure payment processing for medical facilities",
      features: [
        "HIPAA compliant payments",
        "Insurance claim integration",
        "Appointment scheduling",
        "EMR system compatibility",
        "Patient billing management"
      ],
      stats: { merchants: "15K+", transactions: "2M+/month", growth: "+38%" }
    },
    {
      icon: GraduationCap,
      name: "Education & Institutions",
      color: "emerald",
      tagline: "Smart Fee Collection",
      description: "Simplify fee collection for educational organizations",
      features: [
        "Tuition fee automation",
        "Installment payment plans",
        "Scholarship management",
        "Parent payment portals",
        "Multi-campus support"
      ],
      stats: { merchants: "10K+", transactions: "1M+/month", growth: "+41%" }
    },
    {
      icon: Warehouse,
      name: "E-commerce & Online",
      color: "teal",
      tagline: "Online Commerce Power",
      description: "Power your online store with seamless payment gateway",
      features: [
        "Multi-currency support",
        "One-click checkout",
        "Cart abandonment recovery",
        "Subscription billing",
        "Fraud detection"
      ],
      stats: { merchants: "40K+", transactions: "15M+/month", growth: "+68%" }
    },
    {
      icon: Briefcase,
      name: "Service Providers",
      color: "emerald",
      tagline: "Professional Invoicing",
      description: "Professional invoicing and payment collection",
      features: [
        "Custom invoice generation",
        "Recurring billing",
        "Project-based payments",
        "Time tracking integration",
        "Client payment portals"
      ],
      stats: { merchants: "25K+", transactions: "3M+/month", growth: "+49%" }
    },
    {
      icon: Building2,
      name: "Real Estate",
      color: "teal",
      tagline: "Property Payment Hub",
      description: "Manage property transactions and rent collection",
      features: [
        "Rent payment automation",
        "Security deposit handling",
        "Maintenance fee collection",
        "Tenant payment tracking",
        "Property-wise reporting"
      ],
      stats: { merchants: "8K+", transactions: "500K+/month", growth: "+35%" }
    },
    {
      icon: Car,
      name: "Automotive",
      color: "yellow",
      tagline: "Drive Sales Forward",
      description: "Accept payments for sales, service, and spare parts",
      features: [
        "Vehicle sales processing",
        "Service booking payments",
        "Spare parts billing",
        "EMI integration",
        "Insurance premium collection"
      ],
      stats: { merchants: "12K+", transactions: "2M+/month", growth: "+43%" }
    },
    {
      icon: Home,
      name: "Home Services",
      color: "teal",
      tagline: "On-Demand Payments",
      description: "On-demand payment collection for service professionals",
      features: [
        "Mobile payment acceptance",
        "Service booking integration",
        "Technician app support",
        "Customer rating system",
        "Job-based invoicing"
      ],
      stats: { merchants: "20K+", transactions: "4M+/month", growth: "+56%" }
    },
    {
      icon: Utensils,
      name: "Food Delivery",
      color: "emerald",
      tagline: "Delivery Fast Lane",
      description: "Fast and secure payments for food delivery platforms",
      features: [
        "COD to digital conversion",
        "Rider app integration",
        "Real-time settlement",
        "Contactless payments",
        "Order tracking sync"
      ],
      stats: { merchants: "5K+", transactions: "8M+/month", growth: "+72%" }
    },
    {
      icon: Dumbbell,
      name: "Fitness & Wellness",
      color: "emerald",
      tagline: "Health & Wealth",
      description: "Membership and class payment management",
      features: [
        "Membership renewals",
        "Class booking payments",
        "Personal trainer billing",
        "Package subscriptions",
        "Guest pass processing"
      ],
      stats: { merchants: "7K+", transactions: "1.5M+/month", growth: "+47%" }
    },
    {
      icon: Plane,
      name: "Travel & Hospitality",
      color: "teal",
      tagline: "Journey Payments",
      description: "Booking and reservation payment solutions",
      features: [
        "Hotel booking payments",
        "Tour package processing",
        "Multi-currency acceptance",
        "Split payment options",
        "Cancellation management"
      ],
      stats: { merchants: "6K+", transactions: "3M+/month", growth: "+39%" }
    }
  ];

  const benefits = [
    {
      title: "Industry Expertise",
      description: "Tailored workflows designed for your specific business needs",
      icon: Star,
      color: "emerald"
    },
    {
      title: "Quick Setup",
      description: "Start accepting payments within 24-48 hours",
      icon: Zap,
      color: "yellow"
    },
    {
      title: "24/7 Support",
      description: "Industry experts available round the clock",
      icon: Shield,
      color: "teal"
    },
    {
      title: "Scale Infinitely",
      description: "Grow from startup to enterprise seamlessly",
      icon: TrendingUp,
      color: "emerald"
    }
  ];

  const globalStats = [
    { value: "200K+", label: "Active Merchants", icon: Users, color: "emerald" },
    { value: "50M+", label: "Monthly Transactions", icon: BarChart3, color: "teal" },
    { value: "99.9%", label: "Uptime Guarantee", icon: Shield, color: "yellow" },
    { value: "12+", label: "Industries Served", icon: Building2, color: "emerald" }
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
              <span className="text-emerald-700 font-bold text-sm">Serving 12+ Industries</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
              Payment Solutions <br />Tailored for{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Your Industry
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              From retail to healthcare, restaurants to e-commerce. <br />
              <span className="font-semibold text-emerald-600">Industry-specific workflows built for your success.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.button
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl border-2 border-gray-200 hover:border-emerald-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-12 sm:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-emerald-200 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                    stat.color === 'emerald' ? 'bg-emerald-500' :
                    stat.color === 'teal' ? 'bg-teal-500' :
                    'bg-yellow-500'
                  }`}>
                    <stat.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.05),transparent_50%)]"></div>

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
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm">Industry Solutions</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Built for <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Every Business</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover payment solutions perfectly designed for your industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onHoverStart={() => setSelectedIndustry(index)}
                onHoverEnd={() => setSelectedIndustry(null)}
              >
                {/* Glow Effect on Hover */}
                {selectedIndustry === index && (
                  <motion.div
                    className={`absolute inset-0 rounded-3xl blur-2xl -z-10 ${
                      industry.color === 'emerald' ? 'bg-emerald-400/30' :
                      industry.color === 'teal' ? 'bg-teal-400/30' :
                      'bg-yellow-400/30'
                    }`}
                    layoutId="industry-glow"
                    transition={{ duration: 0.3 }}
                  />
                )}

                <motion.div
                  className="relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-emerald-300 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col"
                  whileHover={{ y: -8, scale: 1.01 }}
                >
                  {/* Header with Gradient Background */}
                  <div className={`relative p-8 pb-6 ${
                    industry.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-teal-50/30' :
                    industry.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-emerald-50/30' :
                    'bg-gradient-to-br from-yellow-50 to-amber-50/30'
                  }`}>
                    {/* Icon Badge */}
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-lg ${
                        industry.color === 'emerald' ? 'bg-emerald-500' :
                        industry.color === 'teal' ? 'bg-teal-500' :
                        'bg-yellow-500'
                      }`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <industry.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </motion.div>

                    <div className="mb-3">
                      <span className={`inline-block text-xs font-bold uppercase tracking-wider mb-2 ${
                        industry.color === 'emerald' ? 'text-emerald-600' :
                        industry.color === 'teal' ? 'text-teal-600' :
                        'text-yellow-600'
                      }`}>
                        {industry.tagline}
                      </span>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{industry.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="px-8 py-6 flex-1">
                    <p className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Key Features:</p>
                    <ul className="space-y-3 mb-6">
                      {industry.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-2.5"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                            <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats Section */}
                  <div className="px-8 pb-6">
                    <div className="grid grid-cols-3 gap-3 bg-gradient-to-br from-gray-50 to-white p-4 rounded-2xl border border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-black text-emerald-600">{industry.stats.merchants}</div>
                        <div className="text-xs text-gray-500 font-semibold">Merchants</div>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <div className="text-lg font-black text-teal-600">{industry.stats.transactions}</div>
                        <div className="text-xs text-gray-500 font-semibold">Per Month</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-black text-yellow-600 flex items-center justify-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {industry.stats.growth}
                        </div>
                        <div className="text-xs text-gray-500 font-semibold">Growth</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="px-8 pb-8">
                    <motion.button
                      className="w-full py-3.5 px-6 rounded-xl font-bold bg-gray-900 text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className={`h-1.5 ${
                    industry.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                    industry.color === 'teal' ? 'bg-gradient-to-r from-teal-500 to-emerald-500' :
                    'bg-gradient-to-r from-yellow-500 to-amber-500'
                  }`}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Why Businesses <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Choose Paydiya</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading features and support across all sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative group"
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
                    benefit.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-teal-50' :
                    benefit.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-emerald-50' :
                    'bg-gradient-to-br from-yellow-50 to-amber-50'
                  }`}></div>

                  <div className="relative z-10">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl ${
                        benefit.color === 'emerald' ? 'bg-emerald-500' :
                        benefit.color === 'teal' ? 'bg-teal-500' :
                        'bg-yellow-500'
                      }`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <benefit.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
              <Sparkles className="w-10 h-10 text-yellow-300 fill-yellow-300" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to Transform <br />Your Business Payments?
            </h2>
            <p className="text-xl sm:text-2xl text-emerald-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join <span className="font-bold text-yellow-300">200,000+</span> businesses already using Paydiya across all industries
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-yellow-50 transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="bg-emerald-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-emerald-900 transition-colors border-2 border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Talk to Sales
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {["No Setup Fees", "24/7 Support", "Cancel Anytime"].map((item, index) => (
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
