import React from 'react';
import './ProjCards.css';
import { TypeAnimation } from 'react-type-animation';

const ProjCards = () => {
  return (
    <div className="proj-cards-wrapper" id="projects">
      <h1 className="type-animation proj-heading">
        {'print("'}

        <TypeAnimation
          sequence={[
            'Check out my projects!', 2000,
            '¡Mira mis proyectos!', 2000,
            'Regarde mes projets !', 2000,
            'Schau dir meine Projekte an!', 2000,
            '看看我的项目！', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          deletionSpeed={30}
        />

        {'")'}
      </h1>

      <div className="proj-cards-container">
        <div className="project-card">
          <h3 className="project-title">Project Title 1</h3>
          <p className="project-description">Brief description of the project.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <h3 className="project-title">Project Title 2</h3>
          <p className="project-description">Brief description of the project.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <h3 className="project-title">Project Title 3</h3>
          <p className="project-description">Brief description of the project.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
      </div>
    </div>
  );
}

export default ProjCards;
