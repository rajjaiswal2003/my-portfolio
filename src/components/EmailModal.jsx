import React from 'react';

const EmailModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const email = "raj.jaiswal1122003@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        alert("Email copied to clipboard!");
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2100,
            animation: 'fadeIn 0.3s ease'
        }} onClick={onClose}>
            <div className="glass" style={{
                padding: '2.5rem',
                borderRadius: '1.5rem',
                maxWidth: '450px',
                width: '90%',
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                border: '1px solid var(--accent-blue)',
                background: 'rgba(23, 23, 23, 0.8)'
            }} onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '1.2rem',
                        padding: '0.5rem',
                        cursor: 'pointer'
                    }}
                >✕</button>

                <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'rgba(59, 130, 246, 0.1)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto 1rem auto'
                    }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Contact Email</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Feel free to reach out for collaborations!</p>
                </div>

                <div style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                }}>
                    <span style={{
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        fontWeight: 500,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>{email}</span>
                    <button
                        onClick={copyToClipboard}
                        style={{
                            background: 'var(--accent-blue)',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.5rem',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap'
                        }}
                    >Copy</button>
                </div>

                <a
                    href={`mailto:${email}`}
                    className="glass"
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '0.75rem',
                        background: 'var(--accent-gradient)',
                        color: 'white',
                        fontWeight: 700,
                        textAlign: 'center',
                        textDecoration: 'none'
                    }}
                >Open in Mail App</a>
            </div>
        </div>
    );
};

export default EmailModal;
