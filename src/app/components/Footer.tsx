import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import logo from "../../assets/9aefceaa80ce77af4fbdb1644040cb32c9952b85.png";

export function Footer() {
  const footerLinks = {
    "Company": ["About Us", "Solutions", "Pricing", "Support", "Contact"],
    "Products": ["Payment Gateway", "POS Machines", "UPI Sound Box", "Business Dashboard"],
    "Resources": ["Documentation", "API Reference", "FAQs", "Blog", "Case Studies"]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-emerald-500" },
    { icon: Twitter, href: "#", color: "hover:text-teal-500" },
    { icon: Linkedin, href: "#", color: "hover:text-emerald-600" },
    { icon: Instagram, href: "#", color: "hover:text-yellow-500" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img src={logo} alt="Paydiya" className="w-12 h-12" />
              </motion.div>
              <h3 className="text-white text-2xl font-bold">Paydiya</h3>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Paydiya is a digital payments company providing secure, fast, and reliable payment 
              solutions for businesses across India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <motion.a 
                href="mailto:support@paydiya.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">support@paydiya.com</span>
              </motion.a>

              <motion.a 
                href="tel:+91XXXXXXXXXX" 
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </motion.a>

              <motion.div 
                className="flex items-start gap-3 text-gray-400 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm">Mumbai, Maharashtra<br/>India</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], columnIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: columnIndex * 0.1 }}
            >
              <h4 className="text-white font-bold mb-6 text-lg">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  >
                    <motion.a 
                      href="#" 
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all opacity-0 group-hover:opacity-100" />
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get latest updates and offers.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <motion.button
                className="absolute right-2 top-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Paydiya. All rights reserved. Made with ❤️ in India
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <motion.a 
                href="#" 
                className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Cookie Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Refund Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}