import React from 'react';
import { Link } from 'react-router-dom';
import './project.scss'

const Project = () => {
  return (
    <>
      <section className="project-container">
        <div className='project-title-p'>
          <h2>Projects</h2>
        </div>
        <section  className='project-content'>
          <article className="project-card">
            <div className="project-img">

            </div>
            <div className="project-description">
              <div className='project-title'>
                <h2>Proyeto</h2>
              </div>
              <span className='project-hr'>----------</span>
              <span className='project-hr'>----------</span>
              <ul>
                <li>Calculos de energia eléctrica</li>
                <li>Presupuesto</li>
              </ul>
            </div>
            <section className='project-route'>
              <div className='project-btn'>
                <Link to='/project'>Website</Link>
              </div>
              <div className='project-btn'>
                <Link to='/project'>Repository</Link>
              </div>
            </section>
          </article>
          <article className="project-card">
            <div className="project-img">

            </div>
            <div className="project-description">
              <div className='project-title'>
                <h2>Game</h2>
              </div>
              <span className='project-hr'>----------</span>
              <span className='project-hr'>----------</span>
              <ul>
                <li>Si, No, Talves </li>
              </ul>
            </div>
            <section className='project-route'>
              <div className='project-btn'>
                <Link to='/project'>Website</Link>
              </div>
              <div className='project-btn'>
                <Link to='/game'>Repository</Link>
              </div>
            </section>
          </article>
        </section>
      </section>
    </>
    );
};

export default Project;
