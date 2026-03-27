import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaWifi, FaSwimmingPool, FaCoffee, FaSnowflake, FaParking, FaUtensils, FaConciergeBell, FaDumbbell, FaPlane } from 'react-icons/fa'

const Amenities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const amenities = [
    { icon: FaWifi, name: 'Free WiFi' },
    { icon: FaSwimmingPool, name: 'Swimming Pool' },
    { icon: FaCoffee, name: 'Breakfast' },
    { icon: FaSnowflake, name: 'Air Conditioning' },
    { icon: FaParking, name: 'Free Parking' },
    { icon: FaUtensils, name: 'Restaurant' },
    { icon: FaConciergeBell, name: 'Room Service' },
    { icon: FaDumbbell, name: 'Fitness Center' },
    { icon: FaPlane, name: 'Airport Pickup' },
  ]

  return (
    <section id="amenities" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
            Premium Amenities
          </h2>
          <p className="text-blue-200 text-lg">
            Everything you need for a comfortable stay
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-dark rounded-2xl p-8 text-center hover:shadow-2xl transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <Icon className="text-5xl text-blue-300" />
                </motion.div>
                <h3 className="text-white font-semibold text-lg">
                  {amenity.name}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Amenities
