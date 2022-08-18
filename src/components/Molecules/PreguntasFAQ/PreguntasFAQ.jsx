import React, { useState } from 'react'
import './PreguntasFAQ.css'
import DropDown from '../../Utils/icons/dropdown.svg'

export const PreguntasFAQ = ({ question }) => {

    const [active, setActive] = useState(false);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <div onClick={toggleAccordion} className="preguntasFAQ-container">
            <div className="preguntasFAQ">
                <h2 className={active ? "preguntasFAQ isActiveFAQ": "preguntasFAQ-container-title"}>{question}</h2>
                <img src={DropDown} alt="" />
                </div>
                {active ?
                    <div className="answer">
                        <p>
                            Los pasos para tomar una decisión son: Identificar la decisión, reunir la información pertinente, identificar las alternativas,
                            analizar la evidencia, elegir entre las alternativas, actuar, revisar tu decisión
                        </p>
                    </div> : " "}
            

            <hr />
        </div>
    )
}
