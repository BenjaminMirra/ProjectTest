import React from 'react'
import MContigo from '../../../Utils/images/MContigo.png'
import Separator from '../../../Utils/icons/Separator.svg'
import { Link } from "react-router-dom";
import './FooterDesktop.css'

export const FooterDesktop = () => {
    return (
        <footer className='footer-desktop'>
            <div className='footer-desktop-content'>
                <div className="footer-desktop-content-logo-text">
                    <img src={MContigo} alt="MContigo" />
                    <p>
                        La Mente es Maravillosa is a property of Grupo MContigo© 2012  2020. All rights reserved.
                        Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.
                    </p>
                </div>
                <div className="footer-desktop-content-separator">
                <img src={Separator} alt="Separator" />
                </div>
                <div className="footer-desktop-content-secciones">
                <Link to={`/contact`}>
                    <li>Contacto</li>
                    </Link>
                        <li>Política de Cookies</li>
                        <li>Política de Privacidad</li>
                        <li>Términos y condiciones</li>
                        <li>Cláusula informativa de Consentimiento</li>
                </div>
            </div>
        </footer>
    )
}

