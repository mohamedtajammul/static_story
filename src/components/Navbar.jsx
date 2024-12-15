
import { HashLink } from 'react-router-hash-link'
import React, { useState, useRef } from 'react'

import '../App.css'
import '../styles/Navbar.css';

function Navbar() {

    const hamburgerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    function clickHandler() {
        setIsVisible(prev => !prev)
        hamburgerRef.current.classList.toggle('clicked')
    }

    // const styles = {
    //     visibility: `${isVisible ? 'visible' : 'hidden'}`,
    //     transform: `${isVisible ? 'translateX(0vw)' : 'translateX(100vw'}`
    // }

  return (
    <nav className="main-nav" id='navbar'>
        <div className="main-nav__logo">
            <img src="./assets/logo.png" style={{ width: '100%', height: '100%' }} alt="" />
        </div>
        <div className="main-nav__list">
            <ul>
                {/* <li><HashLink to='#home'>Home</HashLink></li> */}
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>

                {/* <li><HashLink to='#about' smooth>About</HashLink></li>
                <li><HashLink to='#services' smooth>Services</HashLink></li>
                <li><HashLink to='#contact' smooth>Contact</HashLink></li> */}
            </ul>
        </div>
        {/* <div className='hamburger' ref={hamburgerRef} onClick={clickHandler}>
            <div className='line-1'></div>
            <div className='line-2'></div>
            <div className='line-3'></div>
        </div>
        <div className="hamburger-menu" style={styles}>
            <ul>
                <li><HashLink to='#home' smooth>Home</HashLink></li>
                <li><HashLink to='#about' smooth>About</HashLink></li>
                <li><HashLink to='#services' smooth>Services</HashLink></li>
                <li><HashLink to='#gallery' smooth>Gallery</HashLink></li>
                <li><HashLink to='#contact' smooth>Contact</HashLink></li>
            </ul>
        </div> */}
    </nav>
);

}

export default Navbar
