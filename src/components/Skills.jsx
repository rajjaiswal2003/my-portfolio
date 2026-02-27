import React from 'react';

const skillCategories = [
    {
        title: "Languages & Frameworks",
        skills: ["Python", "SQL", "C++", "PyTorch", "TensorFlow", "OpenCV", "LangChain", "Streamlit", "Vector DBs"]
    },
    {
        title: "Domains & Expertise",
        skills: ["Generative AI (LLMs, RAG)", "NLP", "Computer Vision", "Recommender Systems"]
    }
];

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Skills & Expertise</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {skillCategories.map((cat, index) => (
                        <div key={index} className="glass" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>{cat.title}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {cat.skills.map(skill => (
                                    <span key={skill} style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
