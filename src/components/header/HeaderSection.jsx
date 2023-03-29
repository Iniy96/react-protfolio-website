import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiFrontendmentor} from "react-icons/si"

const HeaderSection = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/iniyavan-s-8a0666146/" rel="noreferrer" target={'_blank'}><BsLinkedin/></a>
        <a href="https://github.com/Iniy96" rel="noreferrer" target={'_blank'}><FaGithub/></a>
        <a href="https://www.frontendmentor.io/profile/Iniy96" rel="noreferrer" target={'_blank'}><SiFrontendmentor/></a>
    </div>
  )
}

export default HeaderSection