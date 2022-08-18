import React from 'react'
import './NewsLetter.css';
import NewsLetterImg from '../../Utils/icons/newsLetter.png';
import { Button } from '../../Atoms/Button/Button';

export const NewsLetter = () => {
    return (
        <div className='newsLetter'>
            <div className="newsLetter-second">
                <img src={NewsLetterImg} alt="" />
            </div>
            <div className="newsLetter-first">
                <div className="newsLetter-first-text">
                    <h1>NewsLetter</h1>
                    <h3>Suscríbete a nuestro NewsLetter</h3>
                </div>
                <div className="newsLetter-input">
                    <input placeholder="Ingrese su correo electrónico" type="text" />
                    <Button size="xs" label="Enviar" />
                </div>
            </div>
        </div>
    )
}
