import React, { useEffect, useState } from 'react';
import './ProjCards.css';
import { TypeAnimation } from 'react-type-animation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjCards = () => {
  
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const card = {
    skills: 'React, JavaScript, CSS, HTML, Node.js, Express.js, MongoDB',
  };
  const skillsArray = card.skills.split(/, /).filter(Boolean);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    variableWidth: false,
    centerPadding: '60px',
    arrows: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 1440, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="proj-cards-wrapper" id="projects">
      <h1 className="type-animation proj-heading" style={{ color: '#fff', paddingBottom: 20 }}>
        {'print("'}
        <TypeAnimation
          sequence={[
            'Projects', 2000,
            'प्रोजेक्ट्स', 2000,
            'Projets', 2000,
            '프로젝트', 2000,
            'Projekte', 2000,
            
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          deletionSpeed={30}
        />
        {'")'}
      </h1>

      <div className="carousel-container">
        <Slider {...settings} className={`proj-cards-carousel ${animate ? 'show' : ''}`}>
          {[1, 2, 3, 4, 5, 6].map(n => (
            <div key={n} className="project-card">
              <img src="/Images/home-language-bg.png" alt={`Project ${n}`} className="project-thumbnail" />
              <h3 className="project-title">Project Title {n}</h3>
              <p className="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="card-skills">
                {skillsArray.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </p>
              <button className="live-link">View Live</button>
              <button className="demo-link">View Demo</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjCards;
