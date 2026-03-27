import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  )
}

export default App
