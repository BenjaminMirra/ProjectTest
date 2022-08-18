import React from 'react'
import './CardArticle.css'

export const CardArticle = ({ img, category, title, text }) => {

    return (
        <div className="cardArticle">
            <img src={img} alt="cardArticle" />
            <div className='cardArticle-content'>
                <h4>{category}</h4>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}