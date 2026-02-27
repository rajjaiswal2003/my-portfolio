import React from 'react';

const Footer = ({ onEmailClick }) => {
    return (
        <footer className="container" style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Raj Jaiswal</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Building the future with AI.</p>
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <button
                        onClick={onEmailClick}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-secondary)',
                            fontWeight: 500,
                            cursor: 'pointer',
                            fontSize: '1rem',
                            padding: 0
                        }}
                    >Email</button>
                    <a href="https://www.linkedin.com/in/raj-jaiswal2003/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                    <a href="https://github.com/rajjaiswal2003" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
                </div>
            </div>
            <div style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.6 }}>
                © {new Date().getFullYear()} Raj Jaiswal. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
