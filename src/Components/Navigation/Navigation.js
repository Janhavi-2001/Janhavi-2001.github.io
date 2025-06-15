import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [opaque, setOpaque] = useState(false);

    // Store section ids to avoid repeating code
    const sectionIds = ['about', 'experience', 'skills', 'projects', 'contact'];

    useEffect(() => {
        const handleScroll = () => {
            setOpaque(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='container'>
            <nav className={`navStyle${opaque ? ' opaque' : ''}`}>
                {}
                <div
                    className={`burger${menuOpen ? ' open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {}
                <div className={`navLinks${menuOpen ? ' open' : ''}`}>
                    {sectionIds.map(id => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`linkStyle${opaque ? ' linkStyleWhite' : ''}`}
                            onClick={(e) => handleLinkClick(e, id)}
                            aria-label={`Go to ${id}`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1).replace(/([A-Z])/g, ' $1')}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
