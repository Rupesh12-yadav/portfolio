import './main.css';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
  { to: 'mainy', label: 'Home' },
  { to: 'aboutMey', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'project', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar_scrolled' : ''}`}>
      <div className="nav_inner">

        {/* Logo */}
        <div className="nav_logo">
          <span className="logo_bracket">&lt;</span>
          RY
          <span className="logo_bracket">/&gt;</span>
        </div>

        {/* Desktop Links */}
        <div className="nav_links">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="nav_link"
              activeClass="nav_link_active"
            >
              {link.label}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="nav_cta"
          >
            Hire Me
          </ScrollLink>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile_menu ${menuOpen ? 'mobile_menu_open' : ''}`}>
        {navLinks.map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="mobile_link"
            activeClass="mobile_link_active"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </ScrollLink>
        ))}
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={600}
          className="nav_cta mobile_cta"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
