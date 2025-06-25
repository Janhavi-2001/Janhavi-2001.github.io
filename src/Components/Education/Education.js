import React, { useState } from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';

const Education = () => {

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [cards] = useState([
    {
      id: 1,
      degree: 'Master of Science',
      major: 'Software Engineering',
      university: 'Arizona State University',
      date: 'Jan 2025 - Dec 2026',
      coursework: ['Data Structures & Algorithms', 'Software Verification', 'Programming Paradigms', 'Semantic Web Engineering', 'Software Quality Assurance'],
    },
    {
      id: 2,
      degree: 'Bachelor of Engineering',
      major: 'Computer Engineering',
      university: 'University of Pune',
      date: 'Aug 2019 - Jul 2023',
      coursework: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management', 'Operating Systems', 'Computer Networks'],
    },
  ]);

  return (
    <section className="education-wrapper" id="education">
      <h1 className="type-animation education-heading">
        {'print("'}
        <TypeAnimation
          sequence={[
            'Education', 2000,
            '教育', 2000,
            'Educación', 2000,
            'शिक्षा', 2000,
            'Éducation', 2000,
          ]}
          wrapper="span"
          speed={80}
          repeat={Infinity}
          deletionSpeed={30}
        />
        {'")'}
      </h1>

      <div className="education-content">
        {cards.map((card, index) => (
          <motion.article
            key={card.id}
            className="education-card"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
                type: 'spring',
                stiffness: 120,
                damping: 20,
                mass: 0.5,
                transform: { type: 'spring', stiffness: 100, damping: 20 }
            }}
          >
            <FaGraduationCap className="education-icon" />
            <h2 className="education-title">
              {card.degree} &nbsp;&nbsp;● &nbsp;&nbsp;<span className="education-major">{card.major}</span>
            </h2>
            <p className="education-institution">{card.university}</p>
            <p className="education-duration">{card.date}</p>
            <div className="education-details-wrapper">
              <button
                className="toggle-coursework-button"
                onClick={() => toggleExpand(card.id)}
              >
                {expanded[card.id] ? 'Hide Coursework' : 'Show Coursework'}
              </button>

              <AnimatePresence initial={false}>
              {expanded[card.id] && (
                <motion.div
                  className="education-details-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {card.coursework.map((course, index) => (
                    <span key={index} className="education-details">
                      {course}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Education;
