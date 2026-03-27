import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBed, FaWifi, FaSnowflake, FaTv, FaCoffee, FaCouch, FaBath, FaDoorOpen } from 'react-icons/fa'

const Rooms = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const rooms = [
    {
      name: 'Standard Room',
      price: '₹1,999',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      features: ['Queen bed', 'WiFi', 'AC', 'Smart TV'],
      icons: [FaBed, FaWifi, FaSnowflake, FaTv],
    },
    {
      name: 'Deluxe Room',
      price: '₹2,999',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
      features: ['King bed', 'City view', 'Breakfast', 'Work desk'],
      icons: [FaBed, FaCoffee, FaTv, FaWifi],
    },
    {
      name: 'Executive Room',
      price: '₹3,999',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      features: ['Workspace', 'Lounge access', 'Mini fridge', 'Premium WiFi'],
      icons: [FaCouch, FaCoffee, FaSnowflake, FaWifi],
    },
    {
      name: 'Luxury Suite',
      price: '₹5,999',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
      features: ['Living area', 'Bathtub', 'Balcony', 'Dinner included'],
      icons: [FaCouch, FaBath, FaDoorOpen, FaCoffee],
    },
  ]

  return (
    <section id="rooms" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
            Rooms & Pricing
          </h2>
          <p className="text-blue-200 text-lg">
            Choose the perfect room for your stay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                  {room.name}
                </h3>
                <div className="text-3xl font-bold text-blue-300 mb-4">
                  {room.price}
                  <span className="text-sm text-blue-200 font-normal">/night</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => {
                    const Icon = room.icons[idx]
                    return (
                      <div key={feature} className="flex items-center text-blue-100">
                        <Icon className="mr-2 text-blue-300" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    )
                  })}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
