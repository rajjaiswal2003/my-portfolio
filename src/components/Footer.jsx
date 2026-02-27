import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="gradient-text" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Let's Build the Future</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Raj Jaiswal • Data Scientist & AI Engineer</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="mailto:raj.jaiswal1122003@gmail.com" style={{ opacity: 0.7 }}>Email</a>
                    <a href="#" style={{ opacity: 0.7 }}>LinkedIn</a>
                    <a href="#" style={{ opacity: 0.7 }}>GitHub</a>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.5 }}>
                    © {new Date().getFullYear()} Raj Jaiswal. Built with React & Passion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
