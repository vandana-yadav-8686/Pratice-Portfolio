import React from 'react';
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../variants";
import './Service.css';
import Card from '../Card/Card'; // Corrected import path
import heartemoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import resume from './resume.pdf';

const Service = () => {
  return (
    <div className='services' id='Services'>
      {/* left side */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}

        className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus <br /> ipsum dolor sit amet consectetur adipisicing elit. Rem, explicabo?</span>
        <a href={resume} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className="blur" style={{ left: '40rem', background: '#C1F5FF' }}></div>
      </motion.div>
      {/* right side */}
      <motion.div
      
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}      
      className="cards">
        <div style={{ left: '25rem' }}>
          <Card
            image={heartemoji}
            title="Design"
            desc="Figma, Sketch, Photoshop, Adobe XD" // Corrected description
          />
        </div>

        <div style={{ top: '12rem', left: '4rem' }}>
          <Card
            image={Humble}
            title="Developer"
            desc="HTML, CSS, JavaScript, React" // Corrected description
          />
        </div>

        <div style={{ top: '19rem', left: '22rem' }}>
          <Card
            image={Humble}
            title="UI/UX"
            desc="Figma, Sketch, Photoshop, Adobe XD" // Corrected description
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
