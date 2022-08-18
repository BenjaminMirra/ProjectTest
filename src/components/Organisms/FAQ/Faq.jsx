import React from 'react'
import { PreguntasFAQ } from '../../Molecules/PreguntasFAQ/PreguntasFAQ'
import './Faq.css'

export const Faq = () => {
    return (
        <div className="faq-container">
            <h1>Preguntas frecuentes</h1>
            <div className='faq-container-preguntas'>
                <PreguntasFAQ question="¿Cuáles son los pasos para tomar una decisión?"/>
                <PreguntasFAQ question="¿Cuáles son los pasos para tomar una decisión?"/>
                <PreguntasFAQ question="¿Cuáles son los pasos para tomar una decisión?"/>
                <PreguntasFAQ question="¿Cuáles son los pasos para tomar una decisión?"/>
            </div>
        </div>
    )
}
