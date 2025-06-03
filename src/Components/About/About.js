import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper" id="about">
      <h1 className="type-animation about-heading">
        {'print("'}
        <TypeAnimation
          sequence={[
            'Tell me about yourself!', 2000,
            '¡Cuéntame sobre ti!', 2000,
            'Parle-moi de toi !', 2000,
            'Erzähl mir von dir!', 2000,
            '话说你自己！', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          deletionSpeed={30}
        />
        {'")'}
      </h1>

      <div className="quote-block">
        <div className="quote-corner-frame">
            <span className="corner-br-orange" />
            <span className="corner-br-blue" />
            <p className="quote">"Technology is best when it brings people together." </p>
            <p className="author">– Matt Mullenweg</p>
        </div>
        </div>
      <p>
        
      </p>
    </div>
  );
};

export default About;
