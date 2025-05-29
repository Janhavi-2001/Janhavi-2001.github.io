import React, { useState } from 'react';
import { useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [opaque, setOpaque] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setOpaque(window.scrollY > 50); // Adjust scroll threshold as needed
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className='container'>
            <nav className={`navStyle${opaque ? ' opaque' : ''}`}>
                {/* Burger icon */}
                <div className="burger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* Nav links */}
                <div className={`navLinks${menuOpen ? ' open' : ''}`}>
                    <a href="#about" className='linkStyle' onClick={() => setMenuOpen(false)}>About Me</a>
                    <a href="#experience" className='linkStyle' onClick={() => setMenuOpen(false)}>Experience</a>
                    <a href="#projects" className='linkStyle' onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#education" className='linkStyle' onClick={() => setMenuOpen(false)}>Education</a>
                    <a href="#contact" className='linkStyle' style={{ backgroundColor: '#2774AE', color: '#fff' }} onClick={() => setMenuOpen(false)}>Contact Me</a>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;