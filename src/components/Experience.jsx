import React from 'react';

const experiences = [
    {
        role: "Data Scientist",
        company: "Amar Ujala Web Services Pvt ltd",
        period: "Oct 2024 - Present",
        desc: [
            "Engineered a GenAI-driven website ecosystem with custom Chatbot and Recommendation System.",
            "Developed AI pipelines for content automation: Long-Video-to-Clips, Voice Cloning, and AI Infographics.",
            "Implemented automated Meta Keyword Generation using LLMs to optimize SEO."
        ]
    },
    {
        role: "AI Engineer Intern",
        company: "BISAG-N, MeitY, India",
        period: "August 2023 - September 2023",
        desc: [
            "Led the development of an AI-Driven Helmet Detection System with 95% accuracy.",
            "Enhanced enforcement by 30% through integration of license plate recognition."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <h2 style={{ fontSize: 'var(--h2-size)', marginBottom: '3rem', textAlign: 'center' }}>Experience</h2>
                <div style={{ display: 'grid', gap: '2rem' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="glass" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', borderRadius: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                                    <p style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{exp.company}</p>
                                </div>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '1rem' }}>{exp.period}</span>
                            </div>
                            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.1rem', fontSize: '0.95rem', display: 'grid', gap: '0.75rem' }}>
                                {exp.desc.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
