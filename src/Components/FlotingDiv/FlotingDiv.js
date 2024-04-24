import React from 'react'
import Intro from '../Intro/Intro'
import './FlotingDiv.css'
import Crown from '../../img/crown.png';
const FlotingDiv = (props) => {
    return (
        <div className='floting'>
            <img src={props.img} alt="" />
            <div>
                <span>{props.text1}</span>
                <br />
                <span>{props.text2}</span>
            </div>

        </div>
    );
}

export default FlotingDiv
