import React, { useState } from 'react';
import HireMeModal from './HireMeModal';

const Hero = ({ onEmailClick }) => {
    const [isHireModalOpen, setIsHireModalOpen] = useState(false);

    return (
        <section id="about" className="animate-fade-in hero-section" style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            padding: '4rem 0',
            background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)'
        }}>
            <div className="container hero-container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <div className="hero-image-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        width: 'clamp(250px, 40vw, 400px)',
                        height: 'clamp(250px, 40vw, 400px)',
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        border: '4px solid var(--glass-border)',
                        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                        transform: 'rotate(-3deg)'
                    }}>
                        <img
                            src="/profile.png"
                            alt="Raj Jaiswal"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '-20px',
                        width: '100%',
                        height: '100%',
                        border: '2px solid var(--accent-blue)',
                        borderRadius: '2rem',
                        zIndex: -1,
                        opacity: 0.3,
                        transform: 'rotate(2deg)'
                    }}></div>
                </div>
                <div className="hero-content" style={{ textAlign: 'left' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
                        Hello, I'm
                    </h2>
                    <h1 style={{ fontSize: 'var(--h1-size)', marginBottom: '0.5rem', lineHeight: 1, fontWeight: 800 }}>
                        Raj Jaiswal
                    </h1>
                    <h3 className="gradient-text" style={{ fontSize: 'var(--h2-size)', fontWeight: 700, marginBottom: '1.5rem' }}>
                        Data Scientist & AI Engineer
                    </h3>
                    <p style={{ maxWidth: '600px', color: 'var(--text-secondary)', fontSize: 'var(--p-size)', fontWeight: 400, marginBottom: '2.5rem' }}>
                        B.Tech in AI & Data Science. Specializing in Generative AI, RAG, and Computer Vision.
                        Currently engineering AI ecosystems at Amar Ujala.
                    </p>
                    <div className="hero-cta" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <button
                            onClick={() => setIsHireModalOpen(true)}
                            className="glass"
                            style={{
                                padding: '1rem 2rem',
                                borderRadius: '1rem',
                                fontWeight: 700,
                                background: 'var(--accent-gradient)',
                                border: 'none',
                                color: 'white'
                            }}
                        >Hire Me</button>
                        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                            <button
                                onClick={onEmailClick}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-primary)',
                                    opacity: 0.8,
                                    fontWeight: 500,
                                    padding: 0,
                                    cursor: 'pointer',
                                    fontSize: '1rem'
                                }}
                            >Email</button>
                            <a href="https://github.com/rajjaiswal2003" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, fontWeight: 500 }}>GitHub</a>
                            <a href="https://www.linkedin.com/in/raj-jaiswal2003/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, fontWeight: 500 }}>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .hero-section { text-align: center !important; }
                    .hero-container { grid-template-columns: 1fr !important; gap: 3rem !important; }
                    .hero-content { text-align: center !important; display: flex; flex-direction: column; align-items: center; }
                    .hero-cta { justify-content: center !important; }
                    .hero-image-wrapper { transform: scale(0.9); }
                }
            `}</style>

            <HireMeModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
        </section>
    );
};

export default Hero;
