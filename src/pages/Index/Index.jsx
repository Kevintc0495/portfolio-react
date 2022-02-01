import React from 'react';
import './index.scss'
import Navbar from '../../components/NavBar/Navbar';
import Presentation from '../../components/Presentation/Presentation';
import Project from '../../components/Project/Project';
import Skill from '../../components/Skill/Skill';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Presentation/>
      {/* <Project/> */}
      <Skill/>
      <Contact/>
      <Footer/>
    </>
    );
};

export default Home;
