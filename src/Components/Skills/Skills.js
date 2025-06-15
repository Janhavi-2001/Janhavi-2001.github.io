import React from 'react';
import './Skills.css';
import { TypeAnimation } from 'react-type-animation';
import { SiJavascript, SiReact, SiPython, SiCplusplus, SiHtml5, SiCss3, SiBootstrap, SiLaravel, SiSpringboot, SiMysql, SiSqlite, SiGit, SiBitbucket, SiPostman, SiKeras, SiTensorflow, SiNumpy, SiPandas, SiPlotly } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills-wrapper" id="skills">
      <h1 className="type-animation skills-heading" style={{ color: '#fff', paddingBottom: 20 }}>
        {'print("'}
        <TypeAnimation
          sequence={[
            'Skills', 2000,
            'навыки', 2000,
            '技能', 2000,
            'Fähigkeiten', 2000,
            'Habilidades', 2000,
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
        <span className="skill-item"><SiCplusplus />C++</span>
        <span className="skill-item"><SiPython />Python</span>
        <span className="skill-item"><SiHtml5 />HTML5</span>
        <span className="skill-item"><SiCss3 />CSS3</span>
        <span className="skill-item"><SiJavascript />JavaScript</span>
        <span className="skill-item"><SiBootstrap />Bootstrap</span>
        <span className="skill-item"><SiReact />React</span>
        <span className="skill-item"><SiLaravel />Laravel</span>
        <span className="skill-item"><SiSpringboot />Spring Boot</span>
        <span className="skill-item"><SiMysql />MySQL</span>
        <span className="skill-item"><SiSqlite />SQLite</span>
        <span className="skill-item"><SiGit />Git</span>
        <span className="skill-item"><SiBitbucket />Bitbucket</span>
        <span className="skill-item"><SiPostman />Postman</span>
        <span className="skill-item"><SiKeras />Keras</span>
        <span className='skill-item'><SiTensorflow />TensorFlow</span>
        <span className="skill-item"><SiNumpy />NumPy</span>
        <span className="skill-item"><SiPandas />Pandas</span>
        <span className="skill-item"><SiPlotly />Plotly</span>


        <span className="skill-item"><SiCplusplus />C++</span>
        <span className="skill-item"><SiPython />Python</span>
        <span className="skill-item"><SiHtml5 />HTML5</span>
        <span className="skill-item"><SiCss3 />CSS3</span>
        <span className="skill-item"><SiJavascript />JavaScript</span>
        <span className="skill-item"><SiBootstrap />Bootstrap</span>
        <span className="skill-item"><SiReact />React</span>
        <span className="skill-item"><SiLaravel />Laravel</span>
        <span className="skill-item"><SiSpringboot />Spring Boot</span>
        <span className="skill-item"><SiMysql />MySQL</span>
        <span className="skill-item"><SiSqlite />SQLite</span>
        <span className="skill-item"><SiGit />Git</span>
        <span className="skill-item"><SiBitbucket />Bitbucket</span>
        <span className="skill-item"><SiPostman />Postman</span>
        <span className="skill-item"><SiKeras />Keras</span>
        <span className='skill-item'><SiTensorflow />TensorFlow</span>
        <span className="skill-item"><SiNumpy />NumPy</span>
        <span className="skill-item"><SiPandas />Pandas</span>
        <span className="skill-item"><SiPlotly />Plotly</span>
      </div>
    </div>
  </div>
);
}

export default Skills;