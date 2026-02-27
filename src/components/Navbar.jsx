import React from 'react';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '600px',
      padding: '0.75rem 2rem',
      borderRadius: '2rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      zIndex: 1000,
      fontSize: '0.9rem',
      fontWeight: 500
    }}>
      <a href="#about" style={{ opacity: 0.8 }}>About</a>
      <a href="#experience" style={{ opacity: 0.8 }}>Experience</a>
      <a href="#projects" style={{ opacity: 0.8 }}>Projects</a>
      <a href="#skills" style={{ opacity: 0.8 }}>Skills</a>
    </nav>
  );
};

export default Navbar;
