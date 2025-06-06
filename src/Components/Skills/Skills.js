import React from 'react';
import './Skills.css';
import { TypeAnimation } from 'react-type-animation';
import { SiJavascript, SiReact, SiPython, SiCplusplus, SiHtml5, SiCss3, SiBootstrap, SiLaravel, SiSpringboot, SiMysql, SiSqlite, SiGit, SiBitbucket, SiPostman, SiKeras, SiTensorflow } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills-wrapper" id="skills">
      <h1 className="type-animation skills-heading">
        {'print("'}
        <TypeAnimation
          sequence={[
            'Show me your skills!', 2000,
            '¡Muéstrame tus habilidades!', 2000,
            'Montre-moi tes compétences!', 2000,
            'Zeig mir deine Fähigkeiten!', 2000,
            '展示你的技能！', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          deletionSpeed={30}
        />
        {'")'}
      </h1>

      <div className="skills-marquee">
      <div className="marquee-content">
        <span className="skill-item"><SiCplusplus /></span>
        <span className="skill-item"><SiPython /></span>
        <span className="skill-item"><SiHtml5 /></span>
        <span className="skill-item"><SiCss3 /></span>
        <span className="skill-item"><SiJavascript /></span>
        <span className="skill-item"><SiBootstrap /></span>
        <span className="skill-item"><SiReact /></span>
        <span className="skill-item"><SiLaravel /></span>
        <span className="skill-item"><SiSpringboot /></span>
        <span className="skill-item"><SiMysql /></span>
        <span className="skill-item"><SiSqlite /></span>
        <span className="skill-item"><SiGit /></span>
        <span className="skill-item"><SiBitbucket /></span>
        <span className="skill-item"><SiPostman /></span>
        <span className="skill-item"><SiKeras /></span>
        <span className='skill-item'><SiTensorflow /></span>


        <span className="skill-item"><SiCplusplus /></span>
        <span className="skill-item"><SiPython /></span>
        <span className="skill-item"><SiHtml5 /></span>
        <span className="skill-item"><SiCss3 /></span>
        <span className="skill-item"><SiJavascript /></span>
        <span className="skill-item"><SiBootstrap /></span>
        <span className="skill-item"><SiReact /></span>
        <span className="skill-item"><SiLaravel /></span>
        <span className="skill-item"><SiSpringboot /></span>
        <span className="skill-item"><SiMysql /></span>
        <span className="skill-item"><SiSqlite /></span>
        <span className="skill-item"><SiGit /></span>
        <span className="skill-item"><SiBitbucket /></span>
        <span className="skill-item"><SiPostman /></span>
        <span className="skill-item"><SiKeras /></span>
        <span className='skill-item'><SiTensorflow /></span>
      </div>
    </div>
    </div>
  );
}

export default Skills;