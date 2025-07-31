import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h3
              className="text-2xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Krishna Handa
            </motion.h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              AI Automation Expert & ML Engineer passionate about creating 
              intelligent solutions that transform businesses and drive innovation.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <motion.div
                className="mx-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="text-red-500" size={16} fill="currentColor" />
              </motion.div>
              <span>in Punjab, India</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AI Automation</li>
              <li>Machine Learning</li>
              <li>Data Analysis</li>
              <li>WhatsApp Chatbots</li>
              <li>Business Intelligence</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Krishna Handa. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;