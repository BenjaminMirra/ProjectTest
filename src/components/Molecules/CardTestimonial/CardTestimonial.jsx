import React from 'react';
import './CardTestimonial.css';
import User from '../../Utils/icons/user.png';
import Comillas from '../../Utils/icons/comillas.png';

export const CardTestimonial = ({ text, user }) => {
    return (
        <div className="cardTestimonial">
            <div className='cardTestimonial-content'>
                <div className='cardTestimonial-content-images'>
                    <div className="cardTestimonial-content-images-comillas">
                        <img src={Comillas} alt="" />
                    </div>
                    <div className="cardTestimonial-content-images-user">
                        <img src={User} alt="" />
                    </div>
                </div>
                <div className='cardTestimonial-content-text'>
                    <h4>{text}</h4>
                    <h3>~ {user} ~</h3>
                </div>
            </div>
        </div>
    )
}
