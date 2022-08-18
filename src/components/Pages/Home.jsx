import React from 'react'
import { Header } from '../Organisms/Header/Header'
import { Footer } from '../Organisms/Footer/Footer'
import './Home.css'
import { HeroHomeDesktop } from '../Organisms/Hero/HeroHomeDesktop'
import { SectionDesktop } from '../Organisms/Sections/SectionsDesktop'
import { HomeInfo } from '../Organisms/HomeInfo/HomeInfo'
import { ArticlesHome } from '../Organisms/ArticlesHome/ArticlesHome'
import { Faq } from '../Organisms/FAQ/Faq'
import { NewsLetter } from '../Organisms/NewsLetter/NewsLetter'
import { CardSlider } from '../Organisms/CardSlider/CardSlider'

export const Home = () => {

    return (
        <>
            <Header />
            <HeroHomeDesktop/>
            <SectionDesktop/>
            <HomeInfo/>
            <ArticlesHome/>
            <Faq/>
            <CardSlider/>
            <NewsLetter/>
            <Footer />
        </>
    );
}