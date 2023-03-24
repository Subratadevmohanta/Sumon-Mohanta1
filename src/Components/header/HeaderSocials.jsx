import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { GoMarkGithub } from 'react-icons/go'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="" target="_blank"><BsLinkedin /></a>
            <a href="" target="_blank"><GoMarkGithub /></a>
            <a href="" target="_blank"><FiDribbble /></a>
        </div>
    )
}

export default HeaderSocials