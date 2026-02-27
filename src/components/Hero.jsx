import React from 'react';

const Hero = () => {
    return (
        <section id="about" className="animate-fade-in" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
        }}>
            <div className="container">
                <div style={{ marginBottom: '2.5rem', position: 'relative', display: 'inline-block' }}>
                    <div style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid var(--glass-border)',
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                        margin: '0 auto'
                    }}>
                        <img
                            src="/rajai.jpeg"
                            alt="Raj Jaiswal"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top center',
                                transform: 'scale(1.2) translateY(5%)'
                            }}
                        />
                    </div>
                </div>
                <h2 style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
                    Hello, I'm
                </h2>
                <h1 style={{ fontSize: 'clamp(3.5rem, 12vw, 7rem)', marginBottom: '0.5rem', lineHeight: 1, fontWeight: 800 }}>
                    Raj Jaiswal
                </h1>
                <h3 className="gradient-text" style={{ fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', fontWeight: 700, marginBottom: '2rem' }}>
                    Data Scientist & AI Engineer
                </h3>
                <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: 400 }}>
                    B.Tech in AI & Data Science. Specializing in Generative AI, RAG, and Computer Vision.
                    Currently engineering AI ecosystems at Amar Ujala.
                </p>
                <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
                    <a href="mailto:raj.jaiswal1122003@gmail.com" className="glass" style={{
                        padding: '1rem 2rem',
                        borderRadius: '1rem',
                        fontWeight: 700,
                        background: 'var(--accent-gradient)',
                        border: 'none'
                    }}>Hire Me</a>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="https://github.com/rajjaiswal2003" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, fontWeight: 500 }}>GitHub</a>
                        <a href="https://www.linkedin.com/in/raj-jaiswal2003/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, fontWeight: 500 }}>LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
