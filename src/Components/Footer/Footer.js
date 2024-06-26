import React from 'react'
import './Footer.css'
import  Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Face from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className='footer'>
       <img src={Wave} alt="" style={{width: '100%'}} />
       <div className="f-content">
        <span>vandanyadav0163@gmail.com</span>
        <div className="f-icon">
         <Insta color='white' size='3rem'/>
         <Face color='white' size='3rem'/>
         <Github color='white' size='3rem'/>
        </div>
       </div>
    </div>
  )
}

export default Footer
