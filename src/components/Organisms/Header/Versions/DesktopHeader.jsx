import React, { useState } from 'react'
import Logo from '../../../Utils/images/Logo.jpg'
import Search from '../../../Utils/icons/Search.jpg'
import MenuHamb from '../../../Utils/icons/MenuHamb.jpg'
import MenuHambClose from '../../../Utils/icons/menuHambClose.jpg'
import { Link } from "react-router-dom";
import './DesktopHeader.css'
import classNames from 'classnames'
import { MenuDesplegable } from '../../../Molecules/MenuDesplegable/MenuDesplegable';

export const DesktopHeader = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const MenuDesplegableClassNames = classNames('menuDesplegable-container', {
    'hide': !isOpen,
    'active': isOpen
  })

  return (
    <>
    <header className="header-desktop">
      <div className="header-desktop-content">
        <div onClick={handleClick} className="header-desktop-content-menuHamburguesa">
          {isOpen ? <img src={MenuHambClose} alt="" /> : <img src={MenuHamb} alt="" />}
        </div>
        <div className="header-desktop-content-logo">
          <Link to={`/`}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header-desktop-content-search">
          <img src={Search} alt="logo" />
        </div>
      </div>
    </header>
    {isOpen ? 
    <div className="menuDesplegableEnHeader">
    <MenuDesplegable clase={MenuDesplegableClassNames}/>
    </div> : ""}
    </>
  );
}


