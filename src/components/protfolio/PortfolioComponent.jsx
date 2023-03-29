import React from 'react'

const PortfolioComponent = (props) => {
    const { project } = props;
    return (
        <article className='protfolio_item'>
            <div className="protfolio_item-image">
                <img src={project.image} alt="" />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio_item-cta">

                <a href={project.github}  className='btn' rel="noreferrer" target={'_blank'}>Github</a>
                <a href={project.liveDemo} className='btn btn-primary' rel="noreferrer" target={'_blank'}>Live Demo</a>
            </div>
        </article>
    )
}

export default PortfolioComponent