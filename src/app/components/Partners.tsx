import { motion } from 'motion/react';
import AxisLogo from '../../assets/Axis.jpg';
import AULogo from '../../assets/au-small-finance-b--600.png';
import UjjivanLogo from '../../assets/ujjivan.png';
import CSBLogo from '../../assets/csb.png';
import ICICILogo from '../../assets/images.jpeg';
import CashfreeLogo from '../../assets/cashfree.png';
import RazorpayLogo from '../../assets/Razorpay.png';
import PineLabsLogo from '../../assets/pine-labs.jpg';
import WorldlineLogo from '../../assets/Worldline.png';
import Msg91Logo from '../../assets/Msg91.png';

export function Partners() {
  const bankPartners = [
    { name: "Axis Bank", logo: AxisLogo },
    { name: "AU Small Finance Bank", logo: AULogo },
    { name: "Ujjivan Small Finance Bank", logo: UjjivanLogo },
    { name: "ICICI Bank", logo: ICICILogo },
    { name: "CSB Bank", logo: CSBLogo },
  ];

  const techPartners = [
    { name: "Cashfree", logo: CashfreeLogo },
    { name: "Razorpay", logo: RazorpayLogo },
    { name: "Pine Labs", logo: PineLabsLogo },
    { name: "Worldline", logo: WorldlineLogo },
    { name: "MSG91", logo: Msg91Logo },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-emerald-50/30 to-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-teal-400/20 to-emerald-500/20"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
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
            Banking & Strategic Partners
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            Trusted by <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with India's leading financial institutions and technology companies
          </p>
        </motion.div>

        {/* Banking Partners */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Banking Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bankPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 flex items-center justify-center aspect-square hover:border-emerald-500 transition-colors group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.1)" }}
              >
                <div className="text-center w-full">
                  <motion.div
                    className="flex items-center justify-center mb-3 h-16"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </motion.div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{partner.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technology & Payment Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 flex items-center justify-center aspect-square hover:border-emerald-500 transition-colors group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.1)" }}
              >
                <div className="text-center w-full">
                  <motion.div
                    className="flex items-center justify-center mb-3 h-16"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </motion.div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{partner.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-4 rounded-2xl border border-emerald-200">
            <span className="text-5xl">🤝</span>
            <p className="text-lg text-gray-900 font-semibold">
              Strategic partnerships enabling <span className="text-emerald-600">innovation at scale</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
