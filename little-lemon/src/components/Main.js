import React from 'react'
import Hero from './Hero'
import '../styles/main.css'
import Highlights from './Highlights'
import Testimonials from './Testimonials'
import About from './About'

export default function Main() {

  return (
    <main>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
    </main>
  )
}
