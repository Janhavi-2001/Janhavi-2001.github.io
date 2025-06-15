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
      threshold: 0.2
    });

    observer.observe(quoteBlock);
  }, []);

  return (
    <div className="about-wrapper" id="about">
      <h1 className="type-animation about-heading">
        {'print("'}

        <TypeAnimation
          sequence={[
            'About Me', 2000,
            '关于我', 2000,
            'Sobre mí', 2000,
            '나에 대해', 2000,
            'Über mich', 2000,
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
            As a software engineering graduate student at Arizona State University, my focus is on leveraging my problem-solving skills to create efficient and user-friendly applications. I'm eager to explore the different ways technology can simplify our lives, and it has since evolved into an inclination towards building functional yet intuitive software.
            <br /><br />
            Fluent in three Indian languages, I hold a JLPT N3 certification in Japanese and am a hobbyist learner of Mandarin Chinese. I believe that not only tools and skills, but understanding diverse perspectives is key to building inclusive technology. I'm always open to enhancing my knowledge in software engineering, internationalization, and contributing to projects that make a difference in our perception of global software development.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
