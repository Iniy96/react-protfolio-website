import React from 'react'
import "./protfolio.css"

import PortfolioComponent from './PortfolioComponent'
import { portfolio } from '../../Portfolio'

const Protfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
         {portfolio.map((project)=>{
          return <PortfolioComponent key={project.id} project={project} />
         })}
        </div>
    </section>
  )
}

export default Protfolio