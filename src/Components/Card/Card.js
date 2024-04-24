import React from 'react'
import './Card.css'
const Card = ({image, title, desc,imgStyle}) => {
  return (
    <div className='card'>
        <img src={image} alt="emoji" style={imgStyle} />
        <span>{title}</span>
        <span>{desc}</span>
        <button className='c-button'>Leran more</button>
    </div>
  )
}

export default Card
