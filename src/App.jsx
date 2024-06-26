import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle ='Our PROGRAM' title = 'What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle ='Gallery' title = 'Campus Photos'/>
        <Campus/>
        <Title subTitle ='Testimonials' title = 'What Student Says'/>
        <Testimonials/>
        <Title subTitle ='Contact' title = 'Get in Touch'/>

      </div>

    </div>
    
    
  )
}

export default App