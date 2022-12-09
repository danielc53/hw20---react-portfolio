import React from 'react';
import './Footer.css'
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <a href='/Contact' className='contactMe'> Contact Me<HiOutlineMail href='/Contact' className='mailIcon' />
        </a>
        </div>

    )
}

export default Footer;