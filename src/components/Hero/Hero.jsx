import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We ensure better education for a better world</h1>
                <p>Our cutting edge curriculmn is designed to empower students, with the knoledge , skills and experience to excell in dynamic field in education.</p>
                <button className='btn'>Explore <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero