import React from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const scrollToRooms = () => {
    document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945)',
          }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/80" />

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6"
          >
            Welcome to Azure Bay Hotel
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Experience luxury, comfort and affordability in the heart of Chennai.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-blue-200 mb-12"
          >
            Perfect for business trips, vacations and family stays.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToRooms}
              className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              View Rooms
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBooking}
              className="px-8 py-4 glass border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl cursor-pointer"
        onClick={scrollToRooms}
      >
        <FaChevronDown />
      </motion.div>
    </section>
  )
}

export default Hero
