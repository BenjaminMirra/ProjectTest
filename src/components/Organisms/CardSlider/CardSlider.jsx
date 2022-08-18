import React from 'react'
import './CardSlider.css'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { CardTestimonial } from '../../Molecules/CardTestimonial/CardTestimonial';

export const CardSlider = () => {

    const slides = [1,2,3,4,5,6,7,8,9,10];

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return (
        <div className='slider-container'>
            <MdChevronLeft size={40}className='slider-icon slider-icon-left' onClick={slideLeft} />
            <div id="slider" className="slider">
                {slides.map((slide,index) => {
                    return(
                        <div className='slider-card'>
                            <CardTestimonial text="Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo." user=" Maria Montessori" />
                        </div>
                    )
                })}
            </div>
            <MdChevronRight size={40}className='slider-icon slider-icon-right' onClick={slideRight} />
        </div>
    )
}
