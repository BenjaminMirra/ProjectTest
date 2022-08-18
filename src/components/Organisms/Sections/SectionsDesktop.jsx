import React from 'react'
import { CardSections } from '../../Molecules/CardSection/CardSections'
import PsicoCard from '../../Utils/images/psicoCard.png'
import NeuroCard from '../../Utils/images/neuroCard.png'
import RelatCard from '../../Utils/images/relatCard.png'
import './SectionsDesktop.css'
import { Button } from '../../Atoms/Button/Button'

export const SectionDesktop = () => {
    return (
        <div className="sections-desktop">
            <h2>Explorá nuestras secciones</h2>
            <div className="sections-desktop-cards">
                <CardSections img={PsicoCard} title="Psicología" paragraph={"La psicología es una de las ciencias más apasionantes que existen. Comprender el..."} color="blue"/>
                <CardSections img={NeuroCard} title="Neurociencia" paragraph={"La neurociencia nos facilita cada día nuevas y fascinantes respuestas sobre nuestro..."} color="purple"/>
                <CardSections img={RelatCard} title="Relaciones" paragraph={"Las relaciones son el pilar de la conducta humana. Descubre con nosotros cómo..."} color="pink"/>
            </div>
            <Button label="VER TODO" size="xs"/>
        </div>
    )
}

