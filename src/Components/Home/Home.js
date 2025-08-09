import React from 'react';
import './Home.css';
import TypeAnimation from '../TypeAnimation/TypeAnimation';
import Image from './Image';
import { SocialIcon } from 'react-social-icons';

const Home = ({ contactRef }) => {
    const handleContactClick = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <TypeAnimation className="type-animation" />
                <p>I'm Janhavi Pimplikar, an aspiring software engineer and a language enthusiast.</p>
                <div className="buttons-container">
                    <a className="resume-button" href="public\Documents\Janhavi-Pimplikar_ATS_Resume.pdf" download="Janhavi-Pimplikar_ATS_Resume.pdf">
                        Download Resume
                    </a>
                    <a className="contact-button" onClick={handleContactClick}>
                        Contact Me
                    </a>
                </div>
            </div>
            <div className='home-social-icons'>
                    <SocialIcon url="mailto:jpimplikar26@gmail.com" target="_blank" className='social-icon' style={{height: 40, width: 40}}/>
                    <SocialIcon url="https://linkedin.com/in/janhavi-pimplikar" target="_blank" className='social-icon' style={{height: 40, width: 40}}/>
                    <SocialIcon url="https://github.com/Janhavi-2001" target="_blank" className='social-icon' style={{height: 40, width: 40}}/>
            </div>
            <Image />
        </div>
    );
};

export default Home;