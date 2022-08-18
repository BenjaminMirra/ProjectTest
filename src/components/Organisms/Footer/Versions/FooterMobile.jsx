import React from 'react'
import { Link } from "react-router-dom";
import './FooterMobile.css'
import Separator from '../../../Utils/icons/separatorFooterMobile.png'
import Logo from '../../../Utils/images/MContigo.png'

export const FooterMobile = () => {
    return (
        <div className='footerMobile'>
            <div className='footerMobileSeparator'>
                <img src={Separator} alt="separator" />
            </div>
            <div className='footerMobileContent'>
                <div className='footerMobileLogo'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='footerMobileSections'>
                    <Link to="/contact">
                        <li>Contacto</li>
                    </Link>
                    <li>Política de Cookies</li>
                    <li>Política de Privacidad</li>
                    <li>Términos y condiciones de uso</li>
                    <li>Cláusula Informativa de Consentimiento</li>
                </div>
                <div className='footerMobileSeparator'>
                    <img src={Separator} alt="separator" />
                </div>
                <div className='footerMobileClausulas'>
                    <p>La Mente es Maravillosa is a property of Grupo MContigo</p>
                    <p>© 2012 – 2020. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
