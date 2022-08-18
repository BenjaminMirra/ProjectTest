import React,{useState,useEffect} from 'react'
import { DesktopHeader } from './Versions/DesktopHeader'
export const Header = () => {

    const [headerDisplayed,setHeaderDisplayed]=useState(<><DesktopHeader/></>)
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth < 2500){
            setHeaderDisplayed(<DesktopHeader/>)
        }
        
    },[windowWidth]);
    return (
        // 
        <>
        
            {headerDisplayed}
        </>
    )
}

Header.propTypes = {}

