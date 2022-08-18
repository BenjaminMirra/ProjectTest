import React from 'react'
import './MenuDesplegable.css'
import searchButton from '../../Utils/icons/searchButton.png'
import Separator from '../../Utils/icons/Separator.svg'
import { Link } from 'react-router-dom'

export const MenuDesplegable = ({clase}) => {
    return (
        <div className={clase}>
            <div className='menuDesplegable-header'>
                <input placeholder="Buscar" type="text" />
                <img src={searchButton} alt="searchButton" />
            </div>
            <div className="menuDesplegable-content">
                <div className="menuDesplegable-content-section">
                    <h3>Psicología</h3>
                    <li>Text Button Regular</li>
                    <li>Text Button Regular</li>
                    <li>Text Button Regular</li>
                </div>
                <div className="menuDesplegable-content-section">
                    <h3>Neurociencias</h3>
                    <li>Text Button Regular</li>
                    <li>Text Button Regular</li>
                    <li>Text Button Regular</li>
                </div>
                <div className="menuDesplegable-content-section">
                    <h3>Relaciones</h3>
                    <li>Text Button Regular</li>
                    <li>Text Button Regular</li>
                    <li>Text Button Regular</li>
                </div>
                <div className="menuDesplegable-content-section">
                    <h3>Bienestar</h3>
                    <li>Text Button Regular</li>
                    <li>Text Button Regular</li>
                    <li>Text Button Regular</li>
                </div>
                <div className="menuDesplegable-content-section">
                    <h3>Salud</h3>
                    <li>Text Button Regular</li>
                    <li>Text Button Regular</li>
                    <li>Text Button Regular</li>
                </div>

            </div>
            <div className='menuDesplegable-separator'>
                <img src={Separator} alt="Separator" />
            </div>
            <div className="menuDesplegable-footer">
                <Link to="/contact">
                    <li>Contacto</li>
                </Link>
                <li>Política de Cookies</li>
                <li>Política de Privacidad</li>
                <li>Términos y condiciones de uso</li>
                <li>Cláusula Informativa de Consentimiento</li>
            </div>
        </div>
    )
}
