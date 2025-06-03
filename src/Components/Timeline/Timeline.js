import React, { useState } from 'react';
import './Timeline.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';


function TimelineCard({ card, side, index }) {

    useEffect(() => {
    AOS.init({
        duration: 800,
        once: true
    });
    }, []);

  return (
    <>
    <div className="timeline-node" style={{ top: `${250 * index + 200}px` }} />
      <div className={`timeline-card-container ${side}`} data-aos={side === 'left' ? 'fade-right' : 'fade-left'}>
        <div className="timeline-card">
          <h3 className="card-title">{card.title}</h3>
          <p className="card-content">{card.content}</p>
          <p className="card-date">{card.date}</p>
        </div>
      </div>
    </>
  );
}

const Timeline = () => {
  const [cards] = useState([
    { id: 1, title: 'Software Development Intern', content: 'Fair Share IT Services Pvt. Ltd.', date: 'Nov 2023 - Aug 2024' },
    { id: 2, title: 'Digital Insights Intern', content: 'Hitachi Vantara India Pvt. Ltd.', date: 'Feb 2023 - Aug 2023' },
  ]);

  return (
    <div className="timeline-wrapper" id = "experience">
      <h1 className="type-animation timeline-heading" style={{ color: '#fff', paddingBottom: 20 }}>
      {'print("'}
        <TypeAnimation
          sequence={[
            'What have you done so far?', 2000,
            '¿Qué has hecho hasta ahora?', 2000,
            'これまで何をしてきましたか?', 2000,
            'Что вы уже сделали?', 2000,
            'अभी तक आपने क्या किया है?', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          deletionSpeed={30}
        />
        {'")'}
      </h1>
      <div className="timeline">
        {cards.map((card, index) => (
          <TimelineCard
            key={card.id}
            card={card}
            side={index % 2 === 0 ? 'left' : 'right'}
            index={index}
          />
        ))}
        <div className="timeline-line" />
      </div>
    </div>
  );
};

export default Timeline;
