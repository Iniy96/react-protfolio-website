import React from 'react'
import {BsFillPatchCheckFill} from "react-icons/bs"


const ExperienceDetails = (props) => {
    const {technology, score} = props
    let level;
    switch (score) {
        case 3:
            level = "Experienced"
            break;
        case 2:
            level = "Intermediate"
            break;
        default:
            level = "Basic"
            break;
    }
  return (
    <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>

              <h4>{technology}</h4>
              <small>{level}</small>
              </div>
            </article>
  )
}

export default ExperienceDetails