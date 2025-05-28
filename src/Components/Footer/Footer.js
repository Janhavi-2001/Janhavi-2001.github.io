import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-icons'>
                <SocialIcon url="mailto:jpimplikar26@gmail.com" target="_blank" className='social-icon' style={{height: 40, width: 40}}/>
                <SocialIcon url="https://linkedin.com/in/janhavi-pimplikar" target="_blank" className='social-icon' style={{height: 40, width: 40}}/>
                <SocialIcon url="https://github.com/Janhavi-2001" target="_blank" className='social-icon' style={{height: 40, width: 40}}/>
            </div>
            <p>&copy; Copyright 2023. Made with ❤️ by Janhavi</p>
        </div>
    );
};

export default Footer;