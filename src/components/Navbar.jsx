import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <Compass className="logo-icon" size={32} />
          <span className="logo-text">Wander<span className="text-gradient">Luxe</span></span>
        </a>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="btn btn-outline">Book Now</a></li>
        </ul>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#F3F4F6"/> : <Menu size={28} color="#F3F4F6"/>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
