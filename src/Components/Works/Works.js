import './Works.css';
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../variants";
import React from 'react';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
    
    return (
        <div className="works">
            {/* Left side */}
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                    <br /> ipsum dolor sit amet consectetur adipisicing elit. Rem, explicabo?
                    <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, hic.
                    <br /> ipsum dolor sit amet consectetur adipisicing elit
                </span>

                <button className='button s-button'>Hire me</button>

                <div className="blur" style={{ left: '40rem', background: '#ABF!FF94' }}></div>
            </motion.div>

            {/* Right side */}
            <div className="works-right">
                <motion.div
                 initial={{ rotate: 45 }}
                 whileInView={{ rotate: 0 }}
                 viewport={{margin:'-60px'}}
                 transitions = {{duration: 3.5, type: 'spring'}}
                 className="main-circle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                <div className="backgroundCircle blueCircle"></div>
                <div className="backgroundCircle yellowCircle"></div>
            </div>
        </div>
    );
}

export default Works;
