import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Degree I Have</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SSC</h4>
                <small className='text-light'>GPA- 5.0</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HSC</h4>
                <small className='text-light'>GPA- 4.89</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Honours 1st</h4>
                <small className='text-light'>GPA- 3.80</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Honours 2nd</h4>
                <small className='text-light'>GPA- 4.00</small>
                </div>
              
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Honours 3rd</h4>
                <small className='text-light'>GPA- 3.98</small>
                </div>
              
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Honours 4th</h4>
                <small className='text-light'>GPA- 4.00</small>
                </div>
              
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>My Job Experience</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Waste inspector </h4>
                <small className='text-light'>Word 2</small>
                </div>
              
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Waste inspector </h4>
                <small className='text-light'>Word 3</small>
                </div>
              
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Waste inspector </h4>
                <small className='text-light'>Word 4</small>
                </div>
              
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Waste inspector </h4>
                <small className='text-light'>Word 5</small>
                </div>
              
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience