import React, { useState } from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {BiMessageSquareDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"


const Nav = () => {

  const [activeNav, setactiveNav] = useState('#home')

  return (
    <nav>
      <a href="#home" onClick={()=>setactiveNav("#home")}
      className={activeNav === "#home" ? "active": " "}>
        <AiOutlineHome/>
        </a>
      <a href="#about" onClick={()=>setactiveNav("#about")}
      className={activeNav === "#about" ? "active": " "}>
        <AiOutlineUser/>
        </a>
      <a href="#experience" onClick={()=>setactiveNav("#experience")}
      className={activeNav === "#experience" ? "active": " "}>
        <BiBook/>
        </a>
      <a href="#portfolio" onClick={()=>setactiveNav("#services")}
      className={activeNav === "#services" ? "active": " "}>
        <RiServiceLine/>
        </a>
      <a href="#contact" onClick={()=>setactiveNav("#contact")}
      className={activeNav === "#contact" ? "active": " "}>
        <BiMessageSquareDetail/>
        </a>
    </nav>
  )
}

export default Nav