import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const BookingForm = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '1',
    roomType: 'standard',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkin: '',
        checkout: '',
        guests: '1',
        roomType: 'standard',
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="booking" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
            Book Your Stay
          </h2>
          <p className="text-blue-200 text-lg">
            Reserve your room in just a few clicks
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-dark rounded-3xl p-8 md:p-12 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-blue-200 mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-blue-200 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-blue-200 mb-2 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-blue-200 mb-2 font-medium">Check-in Date</label>
              <input
                type="date"
                name="checkin"
                value={formData.checkin}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-blue-200 mb-2 font-medium">Check-out Date</label>
              <input
                type="date"
                name="checkout"
                value={formData.checkout}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-blue-200 mb-2 font-medium">Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400 transition-colors"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>

            <div>
              <label className="block text-blue-200 mb-2 font-medium">Room Type</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400 transition-colors"
              >
                <option value="standard">Standard Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="executive">Executive Room</option>
                <option value="suite">Luxury Suite</option>
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-xl"
          >
            Submit Booking Request
          </motion.button>
        </motion.form>

        {/* Success Popup */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
            >
              <div className="glass-dark rounded-3xl p-8 text-center max-w-md">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                  Success!
                </h3>
                <p className="text-blue-200">
                  Booking request submitted successfully!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default BookingForm
