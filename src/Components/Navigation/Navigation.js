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
                    <a href="#experience" className='linkStyle' onClick={e => {e.preventDefault();setMenuOpen(false);document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });}}>Experience</a>
                    <a href="#projects" className='linkStyle' onClick={e => {e.preventDefault();setMenuOpen(false);document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });}}>Projects</a>
                    <a href="#education" className='linkStyle' onClick={e => {e.preventDefault();setMenuOpen(false);document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });}}>Education</a>
                    <a href="#contact" className='linkStyle' style={{ backgroundColor: '#2774AE', color: '#fff' }} onClick={e => {e.preventDefault();setMenuOpen(false);document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'});}}>Contact Me</a>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;