import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
