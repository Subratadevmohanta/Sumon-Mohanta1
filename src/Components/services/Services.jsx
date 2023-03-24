import React from 'react'
import './services.css'
import { BsCheckAll } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='service'>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Waste Inspector Word 3</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
                {/* End of UI/UX */}
                <article className="service">
                    <div className="service__head">
                        <h3>Waste Inspector Word 4</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web Developments */}
                <article className="service">
                    <div className="service__head">
                        <h3>Waste Inspector Word 3</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                    </ul>
                </article>
                {/* End of Content Creation */}
            </div>
        </section>
    )
}

export default Services