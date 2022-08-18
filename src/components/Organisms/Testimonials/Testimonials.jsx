import React from 'react'
import { CardTestimonial } from '../../Molecules/CardTestimonial/CardTestimonial'
import './Testimonials.css'

export const Testimonials = () => {
    return (
        <div className='testimonials'>
            <CardTestimonial text="Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo." user=" Maria Montessori" />
            <CardTestimonial text="Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo." user=" Maria Montessori" />
            <CardTestimonial text="Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo." user=" Maria Montessori" />
        </div>
    )
}
