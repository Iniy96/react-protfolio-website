import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { MdWorkHistory } from "react-icons/md"

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <MdWorkHistory className='about_icon' />
              <h5>Experience</h5>
              <small>1+ years</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>

          <p>
            I am a self-motivated web developer with expertise in React, Node.js, and Express.js. I am constantly exploring new technologies to improve my skills and create more efficient web applications. I enjoy working on personal projects and have a passion for learning new technologies to deliver top-notch results.
          </p>
          <div className='about_talk_button'>

            <a href="#contact" className='btn btn-primary' >Let's Talk</a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default about