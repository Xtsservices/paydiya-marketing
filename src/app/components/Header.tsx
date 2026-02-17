import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, CreditCard, Smartphone, Volume2, Receipt } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import logo from "../../assets/9aefceaa80ce77af4fbdb1644040cb32c9952b85.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useState(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const solutions = [
    { 
      name: "Payment Gateway", 
      icon: CreditCard, 
      description: "Accept online payments seamlessly",
      path: "/payment-gateway"
    },
    { 
      name: "POS Machines", 
      icon: Smartphone, 
      description: "Smart offline payment terminals",
      path: "/pos-machines"
    },
    { 
      name: "Sound Box", 
      icon: Volume2, 
      description: "Voice alerts for UPI payments",
      path: "/sound-box"
    },
    { 
      name: "Billing Apps", 
      icon: Receipt, 
      description: "Digital invoicing & billing solutions",
      path: "/billing-apps"
    }
  ];

  const navLinks = [
    { name: "About", hasDropdown: false, path: "/about" },
    { name: "Solutions", hasDropdown: true, path: null },
    { name: "Pricing", hasDropdown: false, path: "/pricing" },
    { name: "Industries", hasDropdown: false, path: "/industries" },
    { name: "Support", hasDropdown: false, path: "/support" }
  ];

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img src={logo} alt="Paydiya" className="w-10 h-10" />
              </motion.div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Paydiya
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => link.hasDropdown && setSolutionsOpen(true)}
                onMouseLeave={() => link.hasDropdown && setSolutionsOpen(false)}
              >
                {link.hasDropdown ? (
                  <div className="flex items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors font-semibold cursor-pointer">
                    {link.name}
                    <motion.div
                      animate={{ rotate: solutionsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors font-semibold"
                  >
                    {link.name}
                  </Link>
                )}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 w-0 group-hover:w-full transition-all duration-300"
                />

                {/* Solutions Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 space-y-2">
                          {solutions.map((solution, idx) => (
                            <Link
                              key={solution.name}
                              to={solution.path}
                              onClick={() => setSolutionsOpen(false)}
                            >
                              <motion.div
                                className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                whileHover={{ x: 5 }}
                              >
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform">
                                  <solution.icon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-gray-900 mb-1 group-hover/item:text-emerald-600 transition-colors">
                                    {solution.name}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {solution.description}
                                  </p>
                                </div>
                                <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90 group-hover/item:text-emerald-600 transition-colors" />
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                        
                        {/* View All Solutions */}
                        <div className="border-t border-gray-100 p-4">
                          <motion.a
                            href="#solutions"
                            className="flex items-center justify-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
                            whileHover={{ x: 5 }}
                          >
                            View All Solutions
                            <ChevronDown className="-rotate-90 w-4 h-4" />
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button 
              className="text-emerald-600 hover:text-emerald-700 transition-colors font-semibold px-4 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
            <motion.button 
              className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold overflow-hidden group shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-1">
                {/* Solutions with Dropdown */}
                <div>
                  <motion.button
                    className="flex items-center justify-between w-full text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors py-3 px-4 rounded-lg font-semibold"
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solutions
                    <motion.div
                      animate={{ rotate: solutionsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        className="ml-4 mt-2 space-y-2"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {solutions.map((solution, idx) => (
                          <Link
                            key={solution.name}
                            to={solution.path}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setSolutionsOpen(false);
                            }}
                          >
                            <motion.div
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                            >
                              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <solution.icon className="w-5 h-5 text-emerald-600" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">{solution.name}</p>
                                <p className="text-xs text-gray-600">{solution.description}</p>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Nav Links */}
                {navLinks.slice(1).map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.path}
                  >
                    <motion.div
                      className="flex items-center justify-between text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors py-3 px-4 rounded-lg font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3 px-4">
                  <motion.button 
                    className="w-full text-emerald-600 hover:text-emerald-700 transition-colors py-3 text-left font-semibold"
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign In
                  </motion.button>
                  <motion.button 
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}