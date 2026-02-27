import React from 'react';

const projects = [
    {
        title: "Automated Multimedia Content Pipeline",
        period: "Aug 2025 - Dec 2025",
        desc: "End-to-end pipeline converting long-form videos into engaging short clips using AI, reducing manual editing time by 70%.",
        tags: ["GenAI", "Video Processing", "Automation"]
    },
    {
        title: "Real-Time Newsroom AI Chatbot",
        period: "Mar 2025 - July 2025",
        desc: "RAG-based chatbot for live news queries with real-time indexing, replacing static search with interactive discovery.",
        tags: ["RAG", "LLMs", "Vector DB"]
    },
    {
        title: "Content-Based Recommendation System",
        period: "Oct 2024 - Feb 2025",
        desc: "Personalization engine using Vector Embeddings and Cosine Similarity to suggest articles based on user behavior.",
        tags: ["RecSys", "NLP", "Embeddings"]
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Featured Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{project.period}</span>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flexGrow: 1, marginBottom: '1.5rem' }}>{project.desc}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', borderRadius: '1rem', background: 'var(--accent-gradient)', opacity: 0.9, fontWeight: 600 }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
