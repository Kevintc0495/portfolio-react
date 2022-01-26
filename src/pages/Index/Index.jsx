import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import imagen from '../../assets/img/large.jpg'
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
