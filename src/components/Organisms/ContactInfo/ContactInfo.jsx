import React from 'react'
import './ContactInfo.css'
import telIcon from '../../Utils/icons/telIcon.png';
import wpIcon from '../../Utils/icons/wpIcon.png';
import ubicIcon from '../../Utils/icons/ubicIcon.png';
import emailIcon from '../../Utils/icons/emailIcon.png';
import { CardContactInfo } from '../../Molecules/CardContactInfo/CardContactInfo';

export const ContactInfo = () => {
  return (
    <div className="contactInfo-container">
      <div className='contactInfo-container-first'>
        <CardContactInfo img={ubicIcon} title={"Teléfono"} text={"+15381321816"}/>
        <CardContactInfo img={telIcon} title={"Teléfono"} text={"+15381321816"}/>
        </div>
        <div className='contactInfo-container-second'>
        <CardContactInfo img={emailIcon} title={"Teléfono"} text={"+15381321816"}/>
        <CardContactInfo img={wpIcon} title={"Teléfono"} text={"+15381321816"}/>
        </div>
    </div>
  )
}
