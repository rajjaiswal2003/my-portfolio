import React, { useState } from 'react';

const Navbar = ({ onEmailClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '95%',
      maxWidth: '700px',
      padding: '0.75rem 1.5rem',
      borderRadius: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 1000,
      fontSize: '0.9rem',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      maxHeight: isOpen ? '400px' : '60px',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        <span style={{ fontWeight: 800, letterSpacing: '2px', color: 'var(--accent-blue)' }}>RJ</span>

        {/* Deskstop Links (Visible when open on mobile or always on desktop if we had media queries in JS) */}
        <div className="desktop-nav" style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
        }}>
          <a href="#about" style={{ opacity: 0.8 }} className="nav-link">About</a>
          <a href="#experience" style={{ opacity: 0.8 }} className="nav-link">Experience</a>
          <a href="#projects" style={{ opacity: 0.8 }} className="nav-link">Projects</a>
          <button
            onClick={toggleMenu}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'none',
              padding: '0.5rem',
              color: 'var(--text-primary)',
              fontSize: '1.2rem'
            }}
          >☰</button>
        </div>

        <button
          onClick={onEmailClick}
          className="contact-btn"
          style={{
            background: 'var(--accent-gradient)',
            border: 'none',
            color: 'white',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '0.8rem',
            padding: '0.5rem 1rem',
            borderRadius: '1rem'
          }}
        >Contact</button>
      </div>

      {/* Mobile Menu Links */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '1.5rem',
        width: '100%',
        textAlign: 'center',
        paddingBottom: '1rem'
      }}>
        <a href="#about" onClick={toggleMenu} style={{ opacity: 0.8 }}>About</a>
        <a href="#experience" onClick={toggleMenu} style={{ opacity: 0.8 }}>Experience</a>
        <a href="#projects" onClick={toggleMenu} style={{ opacity: 0.8 }}>Projects</a>
        <a href="#skills" onClick={toggleMenu} style={{ opacity: 0.8 }}>Skills</a>
      </div>

      <style>{`
        @media (min-width: 769px) {
          nav { padding: 0.75rem 2rem !important; }
          .mobile-toggle { display: none !important; }
          div:last-child { display: none !important; }
          nav { max-height: 60px !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav a { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
