import React from 'react';
import './Home.css';
import TypeAnimation from '../TypeAnimation/TypeAnimation';
import Image from './Image';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <TypeAnimation />
                <p>I'm Janhavi Pimplikar, a passionate software engineer cum language enthusiast.</p>
            </div>
            <Image />
        </div>
    );
}

export default Home;
