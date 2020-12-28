import React from 'react'
import { Button } from '../button/Button'
import './HeroSection.css'
import '../../App.css'
const HeroSection = () => {
  return (
    <div className='hero-container' >
      <video src="/videos/video-2.mp4" muted autoPlay loop/>
      <h1>Adventure Await</h1>
      <p>what are you waiting for?</p>

      <div className="hero-btns">
        <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize = 'btn--large'>Get Started</Button>
        <Button className = 'btns' buttonStyle = 'btn--primary' buttonSize = 'btn--large'>Watch Trailer
        <i /></Button>
      </div>

    </div>
  )
}

export default HeroSection
