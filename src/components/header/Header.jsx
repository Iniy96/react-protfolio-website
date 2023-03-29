import React from 'react'
import CTA from './CTA'
import "./header.css"
import ME from "../../assets/me.png"
import HeaderSection from './HeaderSection'

const Header = () => {
  return (
    <header id='home'>
      
      <div className="container header_container" >
        <h5>Hello I'm</h5>
        <h1>Iniyavan</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        <HeaderSection />

        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href='#contact' className='scroll_down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header