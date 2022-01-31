import React from 'react';
import './skill.scss';
import bootstrap from '../../assets/img/skills/bootstrap.png';
import css3 from '../../assets/img/skills/css3.png';
import git from '../../assets/img/skills/git.png';
import html5 from '../../assets/img/skills/html5.png';
import js from '../../assets/img/skills/js.png';
import nodejs from '../../assets/img/skills/nodejs.png';
import nuxt from '../../assets/img/skills/nuxt.png';
import reactjs from '../../assets/img/skills/reactjs.png';
import sass from '../../assets/img/skills/sass.png';
import vuejs from '../../assets/img/skills/vuejs.png';


const Skill = () => {
  return (
    <>
      <section className="skill-container" id='skill'>
        <div className='skill-title'>
          <h2>Skills</h2>
        </div>
        <article className="skill-link">
          <div className="skill-item">
            <img src={html5} alt="Gmail"/>
            <span>HTML 5</span>
          </div>
          <div className="skill-item">
            <img src={css3} alt="Git Hub"/>
            <span>CSS 3</span>
          </div>
          <div className="skill-item">
            <img src={js} alt="Linkedin"/>
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <img src={vuejs} alt="Linkedin"/>
            <span>Vue JS</span>
          </div>
          <div className="skill-item">
            <img src={nuxt} alt="Linkedin"/>
            <span>Nuxt</span>
          </div>
          <div className="skill-item">
            <img src={reactjs} alt="Linkedin"/>
            <span>React JS</span>
          </div>
          <div className="skill-item">
            <img src={nodejs} alt="Linkedin"/>
            <span>Node JS</span>
          </div>
          <div className="skill-item">
            <img src={git} alt="Linkedin"/>
            <span>Git</span>
          </div>
          <div className="skill-item">
            <img src={sass} alt="Linkedin"/>
            <span>Sass</span>
          </div>
          <div className="skill-item">
            <img src={bootstrap} alt="Linkedin"/>
            <span>Bootstrap</span>
          </div>
        </article>
      </section>
    </>
  );
};

export default Skill;
