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
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
                    Hello, I'm
                </h2>
                <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
                    Raj Jaiswal
                </h1>
                <h3 className="gradient-text" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 600, marginBottom: '2rem' }}>
                    Data Scientist & AI Engineer
                </h3>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    B.Tech in AI & Data Science. Specializing in Generative AI, RAG, and Computer Vision.
                    Currently engineering AI ecosystems at Amar Ujala.
                </p>
                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="mailto:raj.jaiswal1122003@gmail.com" className="glass" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 600 }}>Get in Touch</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ opacity: 0.7 }}>Check GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
