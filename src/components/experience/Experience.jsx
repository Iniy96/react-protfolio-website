import React from 'react'
import "./experience.css"
import ExperienceDetails from './ExperienceDetails'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Developement</h3>
          <div className='experience_content'>
            <ExperienceDetails technology={"HTML"} score={3} />
            <ExperienceDetails technology={"CSS"} score={3} />
            <ExperienceDetails technology={"SaaS"} score={3} />
            <ExperienceDetails technology={"JavaScript"} score={3} />
            <ExperienceDetails technology={"BootStrap"} score={3} />
            <ExperienceDetails technology={"React"} score={2} />
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Developement</h3>
          <div className='experience_content'>
            <ExperienceDetails technology={"NodeJs"} score={2} />
            <ExperienceDetails technology={"ExpressJs"} score={2} />
            <ExperienceDetails technology={"MongoDb"} score={2} />
            <ExperienceDetails technology={"Python"} score={1} />
            <ExperienceDetails technology={"GitHub"} score={2} />
            <ExperienceDetails technology={"AWS"} score={2} />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience