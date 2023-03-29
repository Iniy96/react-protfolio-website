import React from 'react'
import "./footer.css"
import {BsFacebook} from "react-icons/bs"
import {ImLinkedin} from "react-icons/im"
import {BsTwitter} from "react-icons/bs"

const footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>Iniyavan</a>

      <ul className='permalinks'>
          <li> <a href="#home">Home</a> </li>
          <li> <a href="#about">About</a> </li>
          <li> <a href="#skills">Skills</a> </li>
          <li> <a href="#portfolio">Portfolio</a> </li>
          <li> <a href="#contact">Contact</a> </li>
      </ul>
      <div className='footer_socials'>
        <a href="https://www.facebook.com/kingstoneiniyavan.s/" rel="noreferrer" target={'_blank'}><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/iniyavan-s-8a0666146/" rel="noreferrer" target={'_blank'}><ImLinkedin/></a>
        <a href="https://twitter.com/IniyavanS3" rel="noreferrer" target={'_blank'}><BsTwitter/></a>
      </div>
      <div className='footer_copyright'>
          <small>&copy; Iniyavan S. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer