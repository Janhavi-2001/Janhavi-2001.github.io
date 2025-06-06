import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './About.css';

const About = () => {

  useEffect(() => {
    const quoteBlock = document.querySelector('.quote-block');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(quoteBlock);
  }, []);

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
          <br />
          <p className="quote">"Technology is best when it brings people together." </p>
          <p className="author">– Matt Mullenweg</p>
          <br />
          <p className="description">
            As a budding software engineer, my focus is on leveraging my problem-solving skills to create efficient and user-friendly applications. I'm eager to explore the different ways technology can simplify our lives, and it has since evolved into a passion for building applications that are not only functional but also user-friendly. 
            I enjoy challenges and understanding perspectives, whether it's related to debugging code or optimizing performance.
            <br /><br />
            Passionate about languages and communication, I believe that understanding diverse perspectives is key to building inclusive technology.
            With fluency in 3 Indian languages, a JLPT N3 certification, and a hobbyist learner of Mandarin Chinese, I wish to bring a unique blend of technical skills and cultural insight to my work. I'm always open to enhancing my knowledge in software engineering, internationalization, and contributing to projects that make a difference in our perception of software development.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
