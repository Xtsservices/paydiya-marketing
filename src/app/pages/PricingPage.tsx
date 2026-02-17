import { motion } from 'motion/react';
import { Check, X, Zap, Shield, TrendingUp, CreditCard, Smartphone, Volume2, FileText, HelpCircle, Star, Sparkles, ArrowRight, CheckCircle2, Users, Award, Clock, Percent } from 'lucide-react';
import { useState } from 'react';

export function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      tagline: "Perfect Start",
      description: "Perfect for small businesses starting their digital payment journey",
      price: "1.5%",
      priceSubtext: "per transaction",
      popular: false,
      color: "emerald",
      bgGradient: "from-emerald-500/10 to-teal-500/5",
      features: [
        { text: "Payment Gateway Integration", included: true },
        { text: "UPI, Cards, Net Banking", included: true },
        { text: "Basic Dashboard", included: true },
        { text: "Email Support", included: true },
        { text: "T+2 Settlements", included: true },
        { text: "Basic Reports", included: true },
        { text: "POS Machines", included: false },
        { text: "Sound Box", included: false },
        { text: "Priority Support", included: false },
        { text: "Custom Integration", included: false }
      ],
      highlights: [
        "Best for startups",
        "No setup fees",
        "Cancel anytime"
      ]
    },
    {
      name: "Business",
      tagline: "Most Popular",
      description: "Most popular for growing businesses with multiple payment needs",
      price: "1.2%",
      priceSubtext: "per transaction",
      popular: true,
      color: "teal",
      bgGradient: "from-teal-500/10 to-emerald-500/5",
      features: [
        { text: "Everything in Starter", included: true },
        { text: "1 POS Machine Free", included: true },
        { text: "1 Sound Box Free", included: true },
        { text: "T+1 Settlements", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "Phone & Email Support", included: true },
        { text: "Multi-location Support", included: true },
        { text: "Custom Branding", included: true },
        { text: "API Access", included: true },
        { text: "Dedicated Manager", included: false }
      ],
      highlights: [
        "Free hardware",
        "Advanced features",
        "Priority support"
      ]
    },
    {
      name: "Enterprise",
      tagline: "Ultimate Power",
      description: "For large businesses requiring custom solutions and priority support",
      price: "Custom",
      priceSubtext: "volume-based pricing",
      popular: false,
      color: "yellow",
      bgGradient: "from-yellow-500/10 to-amber-500/5",
      features: [
        { text: "Everything in Business", included: true },
        { text: "Unlimited POS Machines", included: true },
        { text: "Unlimited Sound Boxes", included: true },
        { text: "Instant Settlements", included: true },
        { text: "White-label Solutions", included: true },
        { text: "24/7 Priority Support", included: true },
        { text: "Dedicated Account Manager", included: true },
        { text: "Custom Integration", included: true },
        { text: "SLA Guarantee", included: true },
        { text: "Custom Reports & APIs", included: true }
      ],
      highlights: [
        "Unlimited hardware",
        "White-label ready",
        "Enterprise SLA"
      ]
    }
  ];

  const addons = [
    {
      icon: Smartphone,
      name: "Additional POS Machine",
      price: "₹2,999",
      period: "per month",
      description: "Add more POS devices for multiple counters",
      features: ["Portable & Countertop", "Contactless Payments", "EMI Available"]
    },
    {
      icon: Volume2,
      name: "Additional Sound Box",
      price: "₹499",
      period: "per month",
      description: "Get extra sound boxes for different locations",
      features: ["Loud Audio Alerts", "Long Battery Life", "Easy Setup"]
    },
    {
      icon: FileText,
      name: "Billing Software",
      price: "₹999",
      period: "per month",
      description: "Complete billing and inventory management",
      features: ["Invoice Generation", "Inventory Tracking", "GST Compliant"]
    }
  ];

  const faqs = [
    {
      question: "Are there any setup fees?",
      answer: "No, there are absolutely no setup fees or hidden charges. You only pay the transaction fees as per your chosen plan."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support all major payment methods including UPI, Credit/Debit Cards, Net Banking, and popular digital wallets like Paytm, PhonePe, Google Pay, etc."
    },
    {
      question: "How long does it take to get started?",
      answer: "After completing KYC verification, you can start accepting payments within 24-48 hours. POS machines and Sound Boxes are delivered within 3-5 business days."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan anytime. Upgrades are instant, and downgrades take effect from the next billing cycle."
    },
    {
      question: "What are the settlement timelines?",
      answer: "Settlement timelines vary by plan: Starter (T+2), Business (T+1), and Enterprise (Instant). T+1 means money reaches your account the next day."
    },
    {
      question: "Is there a contract or lock-in period?",
      answer: "No, there are no long-term contracts. You can cancel anytime with a 30-day notice period. Hardware rentals require a 3-month minimum commitment."
    }
  ];

  const trustBadges = [
    { icon: Shield, label: "PCI-DSS Certified", color: "emerald" },
    { icon: Zap, label: "99.9% Uptime", color: "teal" },
    { icon: Award, label: "Zero Setup Cost", color: "yellow" },
    { icon: Percent, label: "No Hidden Fees", color: "emerald" }
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
            className="absolute top-20 right-10 w-72 h-72 sm:w-[500px] sm:h-[500px] rounded-full blur-3xl bg-gradient-to-br from-emerald-400/30 to-teal-500/20"
            animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], rotate: [0, 90, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-72 h-72 sm:w-[500px] sm:h-[500px] rounded-full blur-3xl bg-gradient-to-tl from-yellow-400/30 to-amber-300/20"
            animate={{ scale: [1, 1.4, 1], x: [0, 40, 0], rotate: [0, -90, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl bg-teal-400/15"
            animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
              <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-emerald-700 font-bold text-sm">Transparent & Competitive Pricing</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
              Choose Your Perfect <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Payment Plan
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Start with zero setup fees. Scale as you grow. <br />
              <span className="font-semibold text-emerald-600">All plans include bank-grade security and 24/7 support.</span>
            </p>

            {/* Trust Indicators Mini */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {["No Hidden Charges", "Cancel Anytime", "Instant Activation"].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
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
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Flexible Plans for <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Every Business</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that matches your business size and growth ambitions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative group ${plan.popular ? 'lg:-mt-8' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Glow Effect */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20"
                    animate={{ opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}

                <div
                  className={`relative bg-white rounded-3xl overflow-hidden border-2 h-full flex flex-col transition-all duration-300 ${
                    plan.popular 
                      ? 'border-emerald-500 shadow-2xl shadow-emerald-500/20' 
                      : 'border-gray-200 shadow-xl hover:shadow-2xl hover:border-emerald-300'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <motion.div 
                      className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl shadow-lg z-10"
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-white" />
                        RECOMMENDED
                      </div>
                    </motion.div>
                  )}

                  {/* Header with Gradient Background */}
                  <div className={`relative p-8 pb-6 bg-gradient-to-br ${plan.bgGradient}`}>
                    {/* Icon Badge */}
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-lg ${
                        plan.color === 'emerald' ? 'bg-emerald-500' :
                        plan.color === 'teal' ? 'bg-teal-500' :
                        'bg-yellow-500'
                      }`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CreditCard className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </motion.div>

                    <div className="mb-3">
                      <span className={`inline-block text-sm font-bold uppercase tracking-wider mb-2 ${
                        plan.color === 'emerald' ? 'text-emerald-600' :
                        plan.color === 'teal' ? 'text-teal-600' :
                        'text-yellow-600'
                      }`}>
                        {plan.tagline}
                      </span>
                      <h3 className="text-3xl font-black text-gray-900">{plan.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-gray-500 font-medium mt-2">{plan.priceSubtext}</p>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {plan.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="inline-block text-xs font-semibold px-3 py-1.5 bg-white/80 text-gray-700 rounded-full border border-gray-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="px-8 py-6">
                    <motion.button
                      className={`w-full py-4 px-6 rounded-2xl font-bold text-lg shadow-lg transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-2xl hover:shadow-emerald-500/40'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </motion.button>
                  </div>

                  {/* Features List */}
                  <div className="px-8 pb-8 flex-1">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">What's Included:</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            {feature.included ? (
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                              </div>
                            ) : (
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                                <X className="w-3.5 h-3.5 text-gray-400" strokeWidth={3} />
                              </div>
                            )}
                            <span className={`text-sm leading-relaxed ${
                              feature.included ? 'text-gray-700 font-medium' : 'text-gray-400'
                            }`}>
                              {feature.text}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Decoration */}
                  <div className={`h-1.5 bg-gradient-to-r ${
                    plan.color === 'emerald' ? 'from-emerald-500 to-teal-500' :
                    plan.color === 'teal' ? 'from-teal-500 to-emerald-500' :
                    'from-yellow-500 to-amber-500'
                  }`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                  badge.color === 'emerald' ? 'bg-emerald-500' :
                  badge.color === 'teal' ? 'bg-teal-500' :
                  'bg-yellow-500'
                }`}>
                  <badge.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <p className="font-bold text-gray-900 text-center">{badge.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
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
              <Sparkles className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-700 font-bold text-sm">Enhance Your Setup</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Optional <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Add-ons</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supercharge your payment setup with additional hardware and software solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <motion.div
                  className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 h-full overflow-hidden hover:border-emerald-300 transition-all"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-xl"
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <addon.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{addon.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{addon.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          {addon.price}
                        </span>
                      </div>
                      <p className="text-gray-500 font-medium mt-1">{addon.period}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {addon.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.button
                      className="w-full py-3 px-6 rounded-xl font-semibold bg-gray-100 text-gray-900 hover:bg-emerald-600 hover:text-white transition-all border border-gray-200 hover:border-emerald-600"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Plan
                    </motion.button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-bl-full"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500 mb-6 shadow-xl"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <HelpCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Frequently Asked <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-emerald-200 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-start justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.03)" }}
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{faq.question}</h3>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 leading-relaxed pt-3">{faq.answer}</p>
                    </motion.div>
                  </div>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                      >
                        <ArrowRight className="w-5 h-5 text-emerald-600 -rotate-90" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            className="mt-16 relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Animated Background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 100%' }}
            />

            <div className="relative z-10 p-10 text-center text-white">
              <Users className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-3xl font-extrabold mb-3">Still have questions?</h3>
              <p className="mb-8 text-emerald-50 text-lg">Our team is here to help you 24/7</p>
              <motion.button
                className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-yellow-50 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Contact Support
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
