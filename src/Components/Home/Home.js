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
                <a className="resume-button" href="public\Documents\Janhavi-Pimplikar_ATS_Resume.pdf" download="Janhavi-Pimplikar_ATS_Resume.pdf"> Here's my resume! </a>
            </div>
            <Image />
        </div>
    );
}

export default Home;
