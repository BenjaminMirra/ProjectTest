import React from 'react'
import './CardContactInfo.css'

export const CardContactInfo = ({img, title,text}) => {
  return (
    <div className='cardContactInfo'>
        <img src={img} alt="cardContact" />
        <div className='cardContactInfo-text'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}
