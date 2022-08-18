import React,{useState,useEffect} from 'react'
import { FooterDesktop } from './Versions/FooterDesktop'
import { FooterMobile } from './Versions/FooterMobile';

export const Footer = () => {
    const [footerDisplayed,setFooterDisplayed]=useState(<><FooterDesktop/></>)
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth <= 600){
            setFooterDisplayed(<><FooterMobile /></>)
        }
        else{
            setFooterDisplayed(<><FooterDesktop /></>)
        }
    },[windowWidth]);
    return (
        <>
        {footerDisplayed}
        </>
    )
}

