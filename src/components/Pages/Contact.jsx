import React from 'react'
import { Header } from '../Organisms/Header/Header'
import { Footer } from '../Organisms/Footer/Footer'
import { HeroContactDesktop } from '../Organisms/Hero/HeroContactDesktop';
import { ContactInfo } from '../Organisms/ContactInfo/ContactInfo';
import { ContactForm } from '../Organisms/ContactForm/ContactForm';

export const Contact = () => {

    return (
        <>
            <Header />
            <HeroContactDesktop/>
            <ContactInfo/>
            <ContactForm/>
            <Footer />
        </>
    );
}