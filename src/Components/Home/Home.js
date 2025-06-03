import React from 'react';
import './Home.css';
import TypeAnimation from '../TypeAnimation/TypeAnimation';
import Image from './Image';


const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <TypeAnimation />
                <p>I'm Janhavi Pimplikar, an aspiring software engineer cum language enthusiast.</p>
                <a className="resume-button" href="public/Documents/Janhavi_Pimplikar_Resume.pdf" download> Here's my resume! </a>
                <a className="contact-button" href="#contact"> Get in touch! </a>
            </div>
            <Image />
        </div>
    );
}

export default Home;
