import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpeg'
import IMG3 from '../../assets/img3.jpeg'
import IMG4 from '../../assets/img4.jpg'
import IMG5 from '../../assets/img5.jpeg'
import IMG6 from '../../assets/img6.jpeg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a Project Details</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>Details</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a Portfolio Items Title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>GitHub</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a Portfolio Items Title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>GitHub</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a Portfolio Items Title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>GitHub</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a Portfolio Items Title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>GitHub</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a Portfolio Items Title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>GitHub</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio