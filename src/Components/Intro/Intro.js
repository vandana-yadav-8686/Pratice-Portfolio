import React from 'react'
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../variants";
import './Intro.css'
import FlotingDiv from './../FlotingDiv/FlotingDiv'//component
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';


const Intro = () => {
  const transitions = { duration: 2, type: 'spring' }


  return (
    <div className='intro' id='Home'>
      <div className="intro-left">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}

          className="intro-title">
          <span>Hy! I Am</span>
          <span>Andrew Thomas</span>
          <span>Frontend Developer with high level  of
            experience in web designing and development,
            producing the Quality work
          </span>
        </motion.div>
        <button className='button intro-button'>Hire me</button>

        <div className="intro-socialLinks">
          <img src={Github} alt="github" />
          <img src={LinkedIn} alt="Linkedin" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      <div className="intro-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="boy" />
        <motion.img
          //  parameter provider by framer motion
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transitions}
          src={glassesimoji}
          alt="glassesimoji" />

        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transitions}
          style={{ top: '-4%', left: '68%' }}>
          <FlotingDiv img={Crown} text1='Web' text2='Developer' />
        </motion.div>

        <motion.div
          initial={{ top: '9rem', left: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transitions}

          style={{ top: '18rem', left: '0rem' }}>
          <FlotingDiv img={thumbup} text1='Best Design' text2='Award' />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div className="blur"
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem'
          }} ></div>
      </div>

    </div>
  )
}

export default Intro
