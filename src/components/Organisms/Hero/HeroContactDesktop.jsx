import React from 'react'
import './HeroContactDesktop.css'

export const HeroContactDesktop = ({ text1, text2, text3 }) => {
    return (
        <div className="hero-contact-desktop">
            <div className="hero-contact-desktop-content">
                <h1>
                    Danos tu <span className='pink'>feedback</span>
                </h1>
                <div clasName='hero-contact-desktop-content-paragraph'>
                <p>
                    Si has encontrado algún error de contenido o has experimentado alguna incidencia mientras navegabas en nuestra página, por favor, notifícanoslo a
                    través del formulario que encontrarás abajo para que podamos seguir mejorando.
                </p>
                </div>
            </div>
        </div>
    )
}

