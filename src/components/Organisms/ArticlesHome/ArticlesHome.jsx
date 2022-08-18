import React from 'react'
import { Button } from '../../Atoms/Button/Button';
import { CardArticle } from '../../Molecules/CardArticle/CardArticle';
import CardArticleImg from '../../Utils/images/cardArticleImg.png';
import './ArticlesHome.css'

export const ArticlesHome = () => {

    return (
        <div className="articlesHome">
            <h1>Artículos más populares</h1>
            <div className="articlesHome-cards">
                <CardArticle img={CardArticleImg} category="Nutrición" title="Colapso mental: cuando siento el peso del mundo sobre mí" text="A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"/>
                <CardArticle img={CardArticleImg} category="Nutrición" title="Colapso mental: cuando siento el peso del mundo sobre mí" text="A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"/>
                <CardArticle img={CardArticleImg} category="Nutrición" title="Colapso mental: cuando siento el peso del mundo sobre mí" text="A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"/>
                
            </div>
            <Button label="VER MÁS" size="xs"/>
        </div>
    );
}