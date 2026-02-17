import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Star } from 'lucide-react';

export function CTASection() {
  const benefits = [
    "No setup fees",
    "Quick activation",
    "24/7 support included"
  ];

  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10
  }));

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
        animate={{ 
          backgroundPosition: ['0px 0px', '40px 40px']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {floatingElements.map((elem) => (
        <motion.div
          key={elem.id}
          className="absolute rounded-full bg-white/20"
          style={{ 
            width: elem.size,
            height: elem.size,
            left: `${elem.x}%`, 
            top: `${elem.y}%` 
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: elem.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl bg-yellow-400/40"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, 60, 0],
          y: [0, 40, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl bg-white/20"
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, -50, 0],
          y: [0, -40, 0],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full blur-3xl bg-teal-400/20"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Sparkle Icon */}
          <motion.div
            className="inline-block mb-6"
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-16 h-16 text-yellow-300" fill="currentColor" />
          </motion.div>

          {/* Heading */}
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start Accepting Payments <br/>
            <span className="text-yellow-300">with Paydiya</span>
          </motion.h2>

          {/* Sub-text */}
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join <span className="font-bold text-yellow-300">10,000+</span> businesses simplifying payments with Paydiya.
          </motion.p>

          {/* Benefits List */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                <span className="text-white font-semibold">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="group relative bg-white text-emerald-600 px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-yellow-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.p 
              className="mt-6 text-sm text-white/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              No credit card required • Setup in 5 minutes • Cancel anytime
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}