import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Rahul S.',
      text: 'Beautiful rooms and excellent service. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya K.',
      text: 'Affordable luxury in Chennai. Loved the breakfast and pool.',
      rating: 5,
    },
    {
      name: 'David M.',
      text: 'Perfect stay for my business trip. Very comfortable rooms.',
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
            Guest Reviews
          </h2>
          <p className="text-blue-200 text-lg">
            What our guests say about us
          </p>
        </motion.div>

        <div className="relative h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="glass-dark rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-4xl text-blue-300 mb-6" />
                <p className="text-white text-xl md:text-2xl mb-6 font-light leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <h4 className="text-blue-200 text-lg font-semibold">
                  {testimonials[current].name}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? 'bg-blue-400 w-8' : 'bg-blue-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
