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

const projects = [
  {
      id: 1,
      title: 'TransManage: Translation Management Made Easy!',
      description: 'A Java full-stack application prototype to streamline multilingual content translation workflows and allow users to manage translation tasks and track their progress.',
      imgSrc: 'Images/home-language-bg.png',
      skills: ['React.js', 'Spring Boot', 'REST APIs', 'H2 Database']
    },
    {
      id: 2,
      title: 'Inattentive Driver Identification Smart System',
      description: 'This group-based project proposes a real-time recognition system to monitor and mitigate inattentive driving patterns using Deep Learning and IoT.',
      videoSrc: 'https://drive.google.com/file/d/1uhLIq1V9wMCbYq0pzbTUG3zpWn-d5pTf/preview',
      skills: ['Python', 'TensorFlow', 'Keras', 'Raspberry Pi']
    },
    {
      id: 3,
      title: 'Floe: A Custom Built Programming Language',
      description: 'A group initiative to create a cross-platform, imperative programming language that supports all data types, loops, and conditional statements, with it\'s own lexical analyzer, parser, and run-time environment.',
      videoSrc: 'https://youtu.be/fUp9p1lgjWI',
      skills: ['Python', 'ANTLR', 'Bash Scripting']
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
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
          {projects.map(project => (
          <div key={project.id} className="project-card">
            {project.videoSrc && project.videoSrc !== '#' ? (
              project.videoSrc.includes('youtube.com') || project.videoSrc.includes('youtu.be') ? (
                <iframe
                  src={project.videoSrc.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/')}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder={0}
                  width="100%"
                  height="200"
                ></iframe>
              ) : (
              project.videoSrc.includes('drive.google.com') ? (
                <iframe
                  src={project.videoSrc}
                  title={project.title}
                  width="100%"
                  height="200"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder={0}
                ></iframe>
            ) : (
              <video width="100%" height="200" controls>
                <source src={project.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
              )
            ) : (
              <img src={project.imgSrc} alt={project.title} className="project-image" width="100%" height="200" />
            )}

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">
              {project.description}
            </p>
            <div className="card-skills">
              {project.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjCards;
