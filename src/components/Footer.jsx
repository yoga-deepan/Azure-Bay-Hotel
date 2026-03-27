import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer" className="py-16 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">
              Azure Bay Hotel
            </h3>
            <p className="text-blue-200 mb-6">
              Experience luxury, comfort and affordability in the heart of Chennai.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-blue-300 hover:text-white transition-colors"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-blue-300 hover:text-white transition-colors"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-blue-300 hover:text-white transition-colors"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-playfair font-bold text-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-blue-200">
                <FaPhone className="text-blue-300 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-blue-200">
                <FaEnvelope className="text-blue-300 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>booking@azurebayhotel.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-blue-200">
                <FaMapMarkerAlt className="text-blue-300 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p>Marina Beach Road, Chennai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-playfair font-bold text-white mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {['Home', 'Rooms', 'Amenities', 'Book Now', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const href = `#${link.toLowerCase().replace(' ', '')}`
                    document.querySelector(href === '#booknow' ? '#booking' : href === '#contact' ? '#footer' : href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block text-blue-200 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center pt-8 border-t border-white/10"
        >
          <p className="text-blue-200">
            © 2026 Azure Bay Hotel. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
