import React from 'react'
import './footer.css'
import { SiFacebook } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Sumon Mohanta</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/sumon.mohanta.102"><SiFacebook/></a>
                <a href="https://www.instagram.com/sumon.mohanta.102/"><BsInstagram/></a>
                <a href=""><AiFillTwitterCircle /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; SUBRATA DEV MOHANTA. All Right Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer