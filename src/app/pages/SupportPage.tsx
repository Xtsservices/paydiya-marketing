import { motion } from 'motion/react';
import { MessageCircle, Phone, Mail, FileText, Book, Video, HelpCircle, Clock, Search, CheckCircle2, Headphones, Globe, Shield, Star, Sparkles, ArrowRight, Users, Zap, Award, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export function SupportPage() {
  const [openFaq, setOpenFaq] = useState<{ categoryIndex: number; faqIndex: number } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      availability: "24/7 Available",
      responseTime: "< 2 minutes",
      color: "emerald",
      action: "Start Chat",
      popular: true
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support experts",
      availability: "24/7 Available",
      responseTime: "Instant",
      color: "teal",
      action: "Call Now",
      popular: false
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries via email",
      availability: "24/7 Available",
      responseTime: "< 4 hours",
      color: "yellow",
      action: "Send Email",
      popular: false
    },
    {
      icon: Headphones,
      title: "Dedicated Manager",
      description: "Premium support with account manager",
      availability: "Business Hours",
      responseTime: "Priority",
      color: "emerald",
      action: "Contact Manager",
      popular: false
    }
  ];

  const resources = [
    {
      icon: Book,
      title: "Knowledge Base",
      description: "Browse our comprehensive documentation and guides",
      articles: "500+",
      label: "Articles",
      color: "emerald"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      articles: "100+",
      label: "Videos",
      color: "teal"
    },
    {
      icon: FileText,
      title: "API Documentation",
      description: "Technical documentation for developers",
      articles: "Complete",
      label: "API Docs",
      color: "yellow"
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Quick answers to common questions",
      articles: "200+",
      label: "FAQs",
      color: "emerald"
    }
  ];

  const faqs = [
    {
      category: "Getting Started",
      icon: Sparkles,
      color: "emerald",
      questions: [
        {
          q: "How do I create a Paydiya account?",
          a: "You can sign up on our website by clicking 'Get Started'. Complete the KYC process with your business documents, and you'll be live within 24-48 hours."
        },
        {
          q: "What documents do I need for KYC?",
          a: "You'll need PAN card, Aadhaar card, business registration documents, bank account details, and GST certificate (if applicable)."
        },
        {
          q: "How long does the activation take?",
          a: "Once you submit all required documents, activation typically takes 24-48 hours. You'll receive email notifications at each step."
        }
      ]
    },
    {
      category: "Payments & Settlements",
      icon: CheckCircle2,
      color: "teal",
      questions: [
        {
          q: "When will I receive my payments?",
          a: "Settlement timelines vary by plan: Starter (T+2), Business (T+1), Enterprise (Instant settlement). You can check your settlement schedule in the dashboard."
        },
        {
          q: "What payment methods are supported?",
          a: "We support UPI, all major credit/debit cards, net banking, and popular digital wallets like Paytm, PhonePe, Google Pay, etc."
        },
        {
          q: "Are there any transaction limits?",
          a: "Transaction limits vary by payment method. UPI has a limit of ₹1 lakh per transaction. Cards and net banking have higher limits. Contact support for custom limits."
        }
      ]
    },
    {
      category: "Technical Support",
      icon: Shield,
      color: "yellow",
      questions: [
        {
          q: "How do I integrate the payment gateway?",
          a: "We provide easy-to-use SDKs for major platforms. Check our API documentation or contact our technical team for integration support."
        },
        {
          q: "What if a transaction fails?",
          a: "Failed transactions are automatically refunded within 5-7 business days. You can track refund status in your dashboard or contact support for assistance."
        },
        {
          q: "Do you provide sandbox testing?",
          a: "Yes, we provide a complete sandbox environment for testing. You can test all payment flows before going live."
        }
      ]
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need it",
      color: "emerald"
    },
    {
      icon: Globe,
      title: "Multi-language",
      description: "Support available in Hindi, English, and regional languages",
      color: "teal"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and handled with utmost security",
      color: "yellow"
    },
    {
      icon: Award,
      title: "99% Satisfaction",
      description: "Highly rated by thousands of merchants",
      color: "emerald"
    }
  ];

  const stats = [
    { value: "< 2 min", label: "Avg. Response Time", icon: Clock, color: "emerald" },
    { value: "24/7", label: "Support Available", icon: Headphones, color: "teal" },
    { value: "99%", label: "Customer Satisfaction", icon: Star, color: "yellow" },
    { value: "10K+", label: "Tickets Resolved Daily", icon: CheckCircle2, color: "emerald" }
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
            className="absolute top-20 right-10 w-96 h-96 sm:w-[600px] sm:h-[600px] rounded-full blur-3xl bg-gradient-to-br from-emerald-400/25 to-teal-500/15"
            animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], rotate: [0, 90, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-96 h-96 sm:w-[600px] sm:h-[600px] rounded-full blur-3xl bg-gradient-to-tl from-yellow-400/25 to-amber-300/15"
            animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], rotate: [0, -90, 0] }}
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
              <Headphones className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
              <span className="text-emerald-700 font-bold text-sm">Support Center</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
              We're Here to{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Help You Succeed
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Get instant answers, expert guidance, and 24/7 support. <br />
              <span className="font-semibold text-emerald-600">Your success is our priority.</span>
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-32 py-5 rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-gray-900 placeholder-gray-400 text-lg shadow-xl"
                />
                <motion.button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Search
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-3">
              {["Getting Started", "Integration Guide", "Payment Issues", "API Docs"].map((item, index) => (
                <motion.button
                  key={index}
                  className="px-5 py-2.5 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:bg-white transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-emerald-200 transition-all shadow-lg hover:shadow-xl text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
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

      {/* Support Channels */}
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
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm">Contact Us</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Get In <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the best way to reach us – we're available 24/7
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Popular Badge */}
                {channel.popular && (
                  <motion.div 
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      POPULAR
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-emerald-300 transition-all h-full relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                    channel.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-teal-50' :
                    channel.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-emerald-50' :
                    'bg-gradient-to-br from-yellow-50 to-amber-50'
                  }`}></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-xl ${
                        channel.color === 'emerald' ? 'bg-emerald-500' :
                        channel.color === 'teal' ? 'bg-teal-500' :
                        'bg-yellow-500'
                      }`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <channel.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{channel.description}</p>

                    {/* Info */}
                    <div className="space-y-3 mb-6 bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
                        <span className="text-gray-700 font-semibold">{channel.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
                        <span className="text-gray-700 font-semibold">Response: {channel.responseTime}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full py-3.5 px-6 rounded-xl font-bold bg-gray-900 text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {channel.action}
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
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
              className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Book className="w-5 h-5 text-teal-600" />
              <span className="text-teal-700 font-bold text-sm">Self-Service</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
              Help Center <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers instantly with our comprehensive documentation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-emerald-300 transition-all cursor-pointer h-full relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                    resource.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-teal-50' :
                    resource.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-emerald-50' :
                    'bg-gradient-to-br from-yellow-50 to-amber-50'
                  }`}></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-xl ${
                        resource.color === 'emerald' ? 'bg-emerald-500' :
                        resource.color === 'teal' ? 'bg-teal-500' :
                        'bg-yellow-500'
                      }`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <resource.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>

                    {/* Count Badge */}
                    <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                      <span className={`text-2xl font-black ${
                        resource.color === 'emerald' ? 'text-emerald-600' :
                        resource.color === 'teal' ? 'text-teal-600' :
                        'text-yellow-600'
                      }`}>{resource.articles}</span>
                      <span className="text-sm font-semibold text-gray-600">{resource.label}</span>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <motion.div 
                    className="absolute bottom-8 right-8"
                    initial={{ x: 0, opacity: 0.5 }}
                    whileHover={{ x: 5, opacity: 1 }}
                  >
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-emerald-600" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                    category.color === 'emerald' ? 'bg-emerald-500' :
                    category.color === 'teal' ? 'bg-teal-500' :
                    'bg-yellow-500'
                  }`}>
                    <category.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">{category.category}</h3>
                </div>

                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => (
                    <motion.div
                      key={faqIndex}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-emerald-200 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: faqIndex * 0.05 }}
                    >
                      <motion.button
                        className="w-full p-6 text-left flex items-start justify-between gap-4"
                        onClick={() => 
                          setOpenFaq(
                            openFaq?.categoryIndex === categoryIndex && openFaq?.faqIndex === faqIndex 
                              ? null 
                              : { categoryIndex, faqIndex }
                          )
                        }
                        whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.03)" }}
                      >
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1 text-lg">{faq.q}</h4>
                          <motion.div
                            initial={false}
                            animate={{ 
                              height: openFaq?.categoryIndex === categoryIndex && openFaq?.faqIndex === faqIndex ? "auto" : 0, 
                              opacity: openFaq?.categoryIndex === categoryIndex && openFaq?.faqIndex === faqIndex ? 1 : 0 
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-600 leading-relaxed pt-3">{faq.a}</p>
                          </motion.div>
                        </div>
                        <motion.div
                          animate={{ 
                            rotate: openFaq?.categoryIndex === categoryIndex && openFaq?.faqIndex === faqIndex ? 180 : 0 
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                            <ArrowRight className="w-5 h-5 text-emerald-600 -rotate-90" />
                          </div>
                        </motion.div>
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-emerald-300 transition-all text-center h-full relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                    feature.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-teal-50' :
                    feature.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-emerald-50' :
                    'bg-gradient-to-br from-yellow-50 to-amber-50'
                  }`}></div>

                  <div className="relative z-10">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl ${
                        feature.color === 'emerald' ? 'bg-emerald-500' :
                        feature.color === 'teal' ? 'bg-teal-500' :
                        'bg-yellow-500'
                      }`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
              <Send className="w-10 h-10 text-white" strokeWidth={2.5} />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Still Need Help?
            </h2>
            <p className="text-xl sm:text-2xl text-emerald-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our support team is ready to assist you <span className="font-bold text-yellow-300">24/7</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-yellow-50 transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                Start Live Chat
              </motion.button>
              <motion.button
                className="bg-emerald-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-emerald-900 transition-colors border-2 border-white/20 inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Support
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {["Instant Response", "Expert Team", "Always Available"].map((item, index) => (
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
