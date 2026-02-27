import React from 'react';

const HireMeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
            animation: 'fadeIn 0.3s ease'
        }} onClick={onClose}>
            <div className="glass" style={{
                padding: '3rem',
                borderRadius: '2rem',
                maxWidth: '500px',
                width: '90%',
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                border: '1px solid var(--accent-blue)'
            }} onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '1.5rem',
                        padding: '0.5rem'
                    }}
                >✕</button>
                <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why Hire Me?</h2>
                <div style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        Expert AI Engineer specializing in GenAI and RAG, delivering 70% efficiency in content automation.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        Proven record of 95% accuracy in complex computer vision systems and real-time newsroom chatbots.
                    </p>
                    <p>
                        Combines deep technical AI expertise with a product-driven mindset to solve high-impact problems.
                    </p>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <a
                        href="mailto:raj.jaiswal1122003@gmail.com"
                        className="glass"
                        style={{
                            padding: '0.8rem 2rem',
                            borderRadius: '1rem',
                            fontWeight: 700,
                            background: 'var(--accent-gradient)',
                            color: 'white'
                        }}
                    >Send Email</a>
                </div>
            </div>
        </div>
    );
};

export default HireMeModal;
